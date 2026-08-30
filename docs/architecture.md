# Architecture

DevMind uses a pnpm/Turborepo monorepo while remaining a single deployable Next.js application. Route handlers expose the API and call the PostgreSQL package directly; there is no separate API service.

## Boundaries
- **Web** owns presentation and HTTP concerns.
- **Core** owns portable domain types and validation.
- **Database** owns persistence and schema definitions.
- **AI** defines a provider-neutral contract for later chat and embeddings.
- **GitHub** reserves a small integration boundary for Phase 4.

The dependency direction is web → packages. Packages never import the web app.
