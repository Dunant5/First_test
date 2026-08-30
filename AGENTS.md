# DevMind Development Instructions

DevMind is a personal AI development memory assistant.

## Product principles
1. Personal developer first.
2. Keep architecture simple and prefer explicit code.
3. Memory quality is more important than feature count.
4. AI providers must be replaceable and user data portable.
5. Every major feature requires tests.

## Stack
TypeScript, Next.js, React, Tailwind CSS, PostgreSQL, Drizzle, pgvector, Vitest, Playwright, pnpm, and Turborepo.

## Before completing a task
Run `pnpm lint`, `pnpm test`, and `pnpm build`, then fix failures and summarize changes.
