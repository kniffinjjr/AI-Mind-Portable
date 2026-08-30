#!/usr/bin/env node
// Local preview server for the AI Mind portable vault.
//
// Renders the vault's Markdown notes to HTML, resolving Obsidian-style
// [[wikilinks]] (path form, basename form, and attachments) into clickable
// navigation. Unresolved links render in red so authoring problems are obvious.
//
// Usage: node preview_server.mjs   (honours PORT and HOST env vars)

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VAULT_ROOT = path.resolve(__dirname, "..", "..");
const PORT = Number(process.env.PORT || 4321);
const HOST = process.env.HOST || "0.0.0.0";

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

// ---------------------------------------------------------------------------
// Vault index (mirrors check_links.py resolution rules).
// ---------------------------------------------------------------------------
function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

function buildIndex() {
  const byRelLower = new Map(); // relpath (lower) -> relpath
  const byRelNoExtLower = new Map(); // relpath without ext (lower) -> relpath
  const byBaseLower = new Map(); // basename/stem (lower) -> relpath
  const mdFiles = [];
  for (const full of listFiles(VAULT_ROOT)) {
    const rel = path.relative(VAULT_ROOT, full).split(path.sep).join("/");
    const base = path.basename(rel);
    const stem = base.replace(/\.[^.]+$/, "");
    byRelLower.set(rel.toLowerCase(), rel);
    byRelNoExtLower.set(rel.replace(/\.[^.]+$/, "").toLowerCase(), rel);
    if (!byBaseLower.has(base.toLowerCase())) byBaseLower.set(base.toLowerCase(), rel);
    if (!byBaseLower.has(stem.toLowerCase())) byBaseLower.set(stem.toLowerCase(), rel);
    if (rel.toLowerCase().endsWith(".md")) mdFiles.push(rel);
  }
  return { byRelLower, byRelNoExtLower, byBaseLower, mdFiles: mdFiles.sort() };
}

let INDEX = buildIndex();

function resolveTarget(target) {
  // returns { rel, isMd } or null
  target = decodeURIComponent(target).trim();
  if (!target) return null;
  const tryNames = target.toLowerCase().endsWith(".md")
    ? [target]
    : [`${target}.md`, target];
  if (target.includes("/")) {
    for (const name of tryNames) {
      const hit = INDEX.byRelLower.get(name.toLowerCase());
      if (hit) return { rel: hit, isMd: hit.toLowerCase().endsWith(".md") };
    }
    const att = INDEX.byRelNoExtLower.get(target.toLowerCase());
    if (att) return { rel: att, isMd: att.toLowerCase().endsWith(".md") };
    return null;
  }
  for (const name of tryNames) {
    const hit = INDEX.byBaseLower.get(name.toLowerCase());
    if (hit) return { rel: hit, isMd: hit.toLowerCase().endsWith(".md") };
  }
  const bare = INDEX.byBaseLower.get(target.toLowerCase());
  if (bare) return { rel: bare, isMd: bare.toLowerCase().endsWith(".md") };
  return null;
}

// ---------------------------------------------------------------------------
// Wikilink preprocessing (skips fenced + inline code).
// ---------------------------------------------------------------------------
function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function convertWikilinksOutsideCode(text) {
  const lines = text.split("\n");
  let inFence = false;
  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      // Protect inline code spans, transform the rest.
      const parts = line.split(/(`[^`]*`)/);
      return parts
        .map((part) => (part.startsWith("`") ? part : transformWikilinks(part)))
        .join("");
    })
    .join("\n");
}

function transformWikilinks(segment) {
  return segment.replace(/\[\[([^\]\n]+?)\]\]/g, (_m, inner) => {
    let [left, alias] = inner.split("|");
    const display = (alias ?? left).trim();
    const [targetNoAnchor, anchor] = left.split("#");
    const resolved = resolveTarget(targetNoAnchor.trim());
    if (!resolved) {
      return `<span class="broken" title="unresolved: ${escapeHtml(left.trim())}">${escapeHtml(display)}</span>`;
    }
    const base = resolved.isMd ? "/view/" : "/raw/";
    const hash = anchor ? `#${encodeURIComponent(anchor.trim())}` : "";
    return `[${display}](${base}${resolved.rel.split("/").map(encodeURIComponent).join("/")}${hash})`;
  });
}

function rewriteRelativeMdLinks(html, currentRel) {
  // Turn <a href="something.md"> into preview links where resolvable.
  return html.replace(/href="([^"]+\.md)(#[^"]*)?"/g, (whole, href, hash = "") => {
    if (/^https?:/i.test(href)) return whole;
    const currentDir = path.posix.dirname(currentRel);
    const joined = href.startsWith("/")
      ? href.slice(1)
      : path.posix.normalize(path.posix.join(currentDir, href));
    const hit = INDEX.byRelLower.get(joined.toLowerCase());
    if (!hit) return whole;
    return `href="/view/${hit.split("/").map(encodeURIComponent).join("/")}${hash || ""}"`;
  });
}

// ---------------------------------------------------------------------------
// HTML shell.
// ---------------------------------------------------------------------------
function page(title, bodyHtml, activeRel = "") {
  const groups = new Map();
  for (const rel of INDEX.mdFiles) {
    const top = rel.includes("/") ? rel.split("/")[0] : "(root)";
    if (!groups.has(top)) groups.set(top, []);
    groups.get(top).push(rel);
  }
  const nav = [...groups.entries()]
    .map(([group, rels]) => {
      const items = rels
        .map((rel) => {
          const name = rel.split("/").pop().replace(/\.md$/, "");
          const cls = rel === activeRel ? ' class="active"' : "";
          return `<li${cls}><a href="/view/${rel.split("/").map(encodeURIComponent).join("/")}">${escapeHtml(name)}</a></li>`;
        })
        .join("");
      return `<details${activeRel.startsWith(group + "/") || group === "(root)" ? " open" : ""}><summary>${escapeHtml(group)} <span class="count">${rels.length}</span></summary><ul>${items}</ul></details>`;
    })
    .join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
:root{--bg:#0f1419;--panel:#161b22;--fg:#e6edf3;--muted:#8b949e;--accent:#58a6ff;--broken:#f85149;--border:#30363d}
*{box-sizing:border-box}body{margin:0;font:15px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--fg);display:flex;min-height:100vh}
aside{width:320px;flex:0 0 320px;background:var(--panel);border-right:1px solid var(--border);height:100vh;overflow:auto;position:sticky;top:0;padding:16px}
aside h1{font-size:15px;margin:0 0 12px}aside h1 a{color:var(--fg);text-decoration:none}
#filter{width:100%;padding:8px 10px;margin-bottom:12px;background:#0d1117;border:1px solid var(--border);border-radius:6px;color:var(--fg)}
details{margin-bottom:4px}summary{cursor:pointer;color:var(--muted);font-weight:600;padding:4px 0;text-transform:uppercase;font-size:12px;letter-spacing:.04em}
.count{color:#484f58;font-weight:400}
ul{list-style:none;margin:2px 0 8px;padding:0 0 0 8px}li{margin:1px 0}
li a{color:var(--fg);text-decoration:none;display:block;padding:3px 8px;border-radius:5px;font-size:13.5px}
li a:hover{background:#21262d}li.active a{background:var(--accent);color:#0d1117}
main{flex:1;max-width:900px;margin:0 auto;padding:32px 48px;overflow:auto}
main a{color:var(--accent)}main pre{background:var(--panel);padding:14px;border-radius:8px;overflow:auto;border:1px solid var(--border)}
main code{background:var(--panel);padding:.15em .4em;border-radius:4px;font-size:.9em}main pre code{background:none;padding:0}
main table{border-collapse:collapse;width:100%;margin:12px 0}main th,main td{border:1px solid var(--border);padding:6px 10px;text-align:left}
main th{background:var(--panel)}main blockquote{border-left:3px solid var(--accent);margin:12px 0;padding:4px 16px;color:var(--muted)}
.broken{color:var(--broken);border-bottom:1px dashed var(--broken);cursor:help}
.crumbs{color:var(--muted);font-size:13px;margin-bottom:8px}
img{max-width:100%}
</style></head><body>
<aside>
<h1><a href="/">AI Mind Vault</a></h1>
<input id="filter" placeholder="Filter notes...">
<nav id="nav">${nav}</nav>
</aside>
<main>${bodyHtml}</main>
<script>
const f=document.getElementById('filter');
f.addEventListener('input',()=>{const q=f.value.toLowerCase();
document.querySelectorAll('#nav li').forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(q)?'':'none';});
document.querySelectorAll('#nav details').forEach(d=>{if(q)d.open=true;});});
</script>
</body></html>`;
}

function renderMarkdown(rel) {
  const full = path.join(VAULT_ROOT, rel);
  const raw = fs.readFileSync(full, "utf8");
  const pre = convertWikilinksOutsideCode(raw);
  let html = md.render(pre);
  html = rewriteRelativeMdLinks(html, rel);
  const crumbs = `<div class="crumbs">${escapeHtml(rel)}</div>`;
  return page(rel.split("/").pop(), crumbs + html, rel);
}

function homePage() {
  const total = INDEX.mdFiles.length;
  const body = `<h1>AI Mind Vault preview</h1>
<p>Local preview of <strong>${total}</strong> Markdown notes with resolved
Obsidian <code>[[wikilinks]]</code>. Pick a note from the sidebar. Unresolved
links appear <span class="broken">in red</span>.</p>
<h2>Start here</h2>
<ul>
<li><a href="/view/00_Home.md">00_Home</a> — vault home</li>
<li><a href="/view/AGENTS.md">AGENTS.md</a> — operating rules</li>
<li><a href="/view/README.md">README</a> — adopter overview</li>
</ul>
<p class="crumbs">Served by preview_server.mjs · run the link checker with
<code>npm run check-links</code></p>`;
  return page("AI Mind Vault preview", body);
}

const MIME = { ".html": "text/html", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml" };

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = decodeURIComponent(url.pathname);

    if (pathname === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(homePage());
    }
    if (pathname === "/healthz") {
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify({ ok: true, notes: INDEX.mdFiles.length }));
    }
    if (pathname === "/reindex") {
      INDEX = buildIndex();
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify({ ok: true, notes: INDEX.mdFiles.length }));
    }

    const viewMatch = pathname.match(/^\/view\/(.+)$/);
    const rawMatch = pathname.match(/^\/raw\/(.+)$/);
    const rel = (viewMatch || rawMatch)?.[1];

    if (rel) {
      // Prevent path traversal.
      const full = path.resolve(VAULT_ROOT, rel);
      if (!full.startsWith(VAULT_ROOT) || !fs.existsSync(full) || !fs.statSync(full).isFile()) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end(page("Not found", `<h1>404</h1><p>No such file: ${escapeHtml(rel)}</p>`));
      }
      if (viewMatch && rel.toLowerCase().endsWith(".md")) {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        return res.end(renderMarkdown(rel));
      }
      const ext = path.extname(full).toLowerCase();
      res.writeHead(200, { "content-type": MIME[ext] || "application/octet-stream" });
      return res.end(fs.readFileSync(full));
    }

    res.writeHead(404, { "content-type": "text/html" });
    res.end(page("Not found", "<h1>404</h1>"));
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end(`Server error: ${err.message}`);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AI Mind Vault preview running at http://${HOST}:${PORT}/ (${INDEX.mdFiles.length} notes)`);
});
