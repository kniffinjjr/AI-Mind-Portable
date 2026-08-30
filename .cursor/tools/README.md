# Vault development tooling

Lightweight tooling for authoring and maintaining this Obsidian-style Markdown
vault. It lives under `.cursor/` so the portable vault tree stays free of product
code. Node 22+ and Python 3 are required (both ship in the Cloud Agent image).

## Setup

```bash
cd .cursor/tools
npm ci
```

`npm ci` is the environment `install` command and is idempotent.

## Commands

| Command | What it does |
|---------|--------------|
| `npm run check-links` | Verify every internal `[[wikilink]]` and relative Markdown link resolves. Exits non-zero on any *new* broken link. |
| `npm run lint` | Run `markdownlint-cli2` across every note using `.markdownlint-cli2.jsonc`. |
| `npm run lint -- --fix` | Auto-fix the fixable formatting issues (blank-line spacing, code-fence languages, etc.). |
| `npm run preview` | Start the local preview server at <http://localhost:4321>. |
| `npm run check` | `lint` + `check-links` together. |

Run any command from `.cursor/tools/`.

## Link checker (`check_links.py`)

Resolves links the way Obsidian does (path form, bare basename, `#heading`
anchors, `|aliases`, and attachments such as `.html`), and skips links inside
fenced or inline code so documentation examples are not flagged.

Targets that are dangling **on purpose** — references into instance residue
(`Projects/`, personal `Sources/`) that the public portable edition excludes,
per the README "Privacy / portability contract" — are listed in
`link-ignore.txt` and reported as *ignored* rather than failures. Regenerate the
baseline after intentional structural changes:

```bash
python3 check_links.py --write-baseline
```

The checker still fails on any newly introduced broken link.

## Preview server (`preview_server.mjs`)

Renders the vault's Markdown to HTML with resolved `[[wikilinks]]` and a
folder-grouped sidebar. Unresolved links render in red so authoring problems are
obvious. Environment overrides: `PORT` (default `4321`), `HOST` (default
`0.0.0.0`). Endpoints: `/` (home), `/view/<note>.md`, `/raw/<attachment>`,
`/healthz`, `/reindex`.
