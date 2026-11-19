# Study Atlas — AI & Data Science

**Education · Curriculum and browser portal** · [Repository](https://github.com/Arnold-RG/study-atlas) · [Open website](https://arnold-rg.github.io/study-atlas/)

## Overview

Structured self-study resource for AI and data science, including a browser-based learning portal, staged lessons, Python exercises, quizzes, tests and interview practice.

> **Engineering status:** Repository structure reviewed in November 2026. Specific capabilities and platform/device security are not certified by this README. Confirm a behavior with source and tests before making public claims.

## Technology and architecture

**Observed stack:** Static HTML/CSS/JavaScript, Python scientific tools and pytest.

| Location | Purpose |
| --- | --- |
| `index.html` | Learning portal entry |
| `web/` | Browser app and learning interface |
| `stages/` | Curriculum stages |
| `exercises/` | Practice exercises |
| `quizzes/` | Knowledge checks |
| `projects/` | Learning projects |
| `interview/` | Interview preparation |
| `tests/` | Automated test suite |
| `requirements.txt` | Python dependencies |
| `HOW_TO_STUDY.md` | Learning instructions |

## Quick start

Install Git and the appropriate runtime/SDK first; inspect the configuration and existing scripts before running anything against production. From the repository root:

```sh
python -m venv .venv
# Activate your virtual environment
python -m pip install -r requirements.txt
python -m pytest
python -m http.server 8000
```

**Development guidance:** Open http://localhost:8000 for the browser portal after starting the HTTP server. Test Python exercises separately from browser rendering.

## Product scope and usability

- Stage-based learning experience with exercises and quizzes.
- Browser navigation and progress management; confirm browser-storage behavior before switching devices.
- Scientific Python environments may require compatible platform-specific dependencies.

The release experience should support clear labels, accessible focus/keyboard navigation (where applicable), useful errors, and truthful customer-facing information. Preview changes before publishing.

## Security and privacy

- Treat supplied notebooks/datasets as untrusted; review scripts before execution.
- Do not upload student or personal progress data to a third party without permission.
- Validate outbound resource links, semantic HTML, keyboard navigation and reduced motion.

Use least privilege, documented trust boundaries and secret scanning. Never include real access tokens in examples. Report vulnerabilities privately through the repository's `SECURITY.md` when available.

## Quality assurance and DevOps

| Release gate | Expected evidence |
| --- | --- |
| Build | Clean, reproducible build using locked dependency versions where available |
| Tests | Unit/integration or relevant command-line tests; passing CI run links |
| Security | Dependency/secret scans and review of authentication and data handling |
| UX | Mobile/desktop and accessibility checks for interactive web interfaces |
| Delivery | Reviewed changes, environment separation, verified deployments and rollback plan |
| Operations | Logs/metrics/alerts for running services; availability/link checks for static websites |

**Important:** This table defines the target quality process, not a claim that every check has passed. Kubernetes is optional and should be introduced only when real backend complexity and scale justify it.

## Working on the project

Keep changes small and reviewable. Update this README when commands or features change, attach test evidence to pull requests, maintain honest limitations and review licenses before adding assets. The repository owner approves release publication.
