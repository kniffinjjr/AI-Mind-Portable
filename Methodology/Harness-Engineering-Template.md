---
title: Harness Engineering Template
type: template
created: 2026-07-30
migrated_from: Google Drive / AI Agent Architecture / 02 - Harness Engineering Template
tags: [template, harness]
---

# Harness Engineering Specification Template

**Agent / System Name:** ________________  
**Owner:** ________________  
**Last Updated:** ________________  
**Version:** ________________  

## 1. Purpose of this Harness

Describe in 2–4 sentences what this harness enables that a raw model cannot.

## 2. Context Injection Strategy

| Context Type | Source / Mechanism | When Injected | Notes |
|--------------|--------------------|---------------|-------|
| System / Role instructions | | | |
| Task-specific policy | | | |
| Conversation / session state | | | |
| Retrieved facts / RAG | | | |
| Skills / tools descriptions | | | |
| Progress / history summary | | | |

**Compaction / Summarization policy:**

## 3. Action Surfaces (Tools)

| Tool Name | Purpose | Input Schema | Output Schema | Side Effects | Observability |
|-----------|---------|--------------|---------------|--------------|---------------|
| | | | | | |

- [ ] Tools are narrow  
- [ ] Schemas unambiguous  
- [ ] Dangerous ops need confirmation / human gate  
- [ ] Every tool call logged  

## 4. Persistence & State

| State Element | Storage | Durability | Who read/write | Notes |
|---------------|---------|------------|----------------|-------|
| Working files | | | | |
| Progress / TODO | | | | |
| Git / checkpoints | | | | |
| Session memory | | | | |
| Long-term memory | | | | |
| Evaluation traces | | | | |

**Recovery after crash or context overflow:**

## 5. Execution Control

| Control | Policy / Value | Notes |
|---------|----------------|-------|
| Max tokens / cost budget | | |
| Wall-clock timeout | | |
| Max tool calls per turn | | |
| Model routing | | |
| Sub-agent spawning | | |
| Approval gates | | |
| Retry / backoff | | |

## 6. Safety & Governance

- Least-privilege:  
- Secret handling:  
- Isolation / sandboxing:  
- Human authorization points:  
- Allow-list / deny-list:  

## 7. Observability

| Signal | How collected | Where viewed | Alert thresholds |
|--------|---------------|--------------|------------------|
| Tool I/O | | | |
| State transitions | | | |
| Cost & latency | | | |
| Failures & escalations | | | |
| Human interventions | | | |

## 8. Known Limitations & Risks

1.  
2.  
3.  

## 9. Change Log

| Date | Change | Reason | Author |
|------|--------|--------|--------|
