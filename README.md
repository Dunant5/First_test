# DevMind

**Your long-term memory for software development.**

DevMind is a personal AI development assistant that remembers your projects, decisions, GitHub activity, and tasks. Instead of explaining your project to AI every time, DevMind preserves the context.

## Phase 1 features
- Project dashboard and project CRUD API
- Structured project memories and memory CRUD API
- Task and activity domain models
- PostgreSQL schema managed with Drizzle ORM
- Self-hosted pgvector database
- Responsive, dark dashboard UI

## Quick start

```bash
cp .env.example .env
pnpm install
docker compose up -d
pnpm --filter @devmind/database db:push
pnpm dev
```

Open <http://localhost:3000>. The API requires `DATABASE_URL`; the dashboard uses representative starter content until projects are created.

## Commands
```bash
pnpm dev
pnpm lint
pnpm test
pnpm build
```

## Workspace
- `apps/web` — Next.js full-stack application
- `packages/core` — validated domain models
- `packages/database` — Drizzle schema and PostgreSQL client
- `packages/ai` — replaceable AI provider contract
- `packages/github` — GitHub integration boundary

See [architecture](docs/architecture.md), [memory design](docs/memory-design.md), and [roadmap](docs/roadmap.md).

## Privacy
Your development memory belongs to you. DevMind is designed for local and self-hosted operation, with its database under your control.
