# CONTRIBUTING - ᴇɴ

How to set up the environment, run the project and send changes.

## Requirements

- Node.js 22 (see `.nvmrc`) and npm 10
- Docker (optional, for the local PostgreSQL database)
- Expo Go or an Android/iOS emulator (for the mobile app)

## Setup

```bash
nvm use
npm install
cp apps/web/.env.example apps/web/.env
docker compose up -d
npm run db:migrate --workspace lamborghini-web
```

`npm install` also runs `prisma generate` for the web app.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Runs web and mobile in parallel |
| `npm run dev:web` | Runs only the web app at `http://localhost:3000` |
| `npm run dev:mobile` | Runs only the Expo dev server |
| `npm run lint` | Lints every workspace |
| `npm run typecheck` | Type checks every workspace |
| `npm run test` | Runs every test suite |
| `npm run test:coverage` | Runs tests with coverage reports |
| `npm run build` | Builds every workspace |
| `npm run format` | Formats the code with Prettier |

## Tests

- Web and packages use **Vitest** (`*.test.ts` / `*.test.tsx` next to the code).
- Mobile uses **Jest** with `jest-expo` and Testing Library. Mobile tests live in `src/__tests__` or next to components, never inside `src/app` (every file there becomes a route).
- Test descriptions are written in English and comments in Portuguese.

## Database

- Every change to `apps/web/prisma/schema.prisma` needs a migration: `npm run db:migrate --workspace lamborghini-web -- --name <name>`.
- CI applies all migrations to a clean PostgreSQL and fails when the schema has changes without a migration.

## Translations

- Every visible text comes from `@lamborghini/translations`. Add the key to **all** locales in `packages/translations/src/locales`. A test fails when the locales are out of sync.

## Pull requests

1. Create a branch from `main`.
2. Make sure `lint`, `typecheck`, `test` and `build` pass locally.
3. Fill in the pull request template checklist.

by caiothedev<br />
#contributing