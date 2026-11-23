# CONTRIBUINDO - ᴘᴛ

Como preparar o ambiente, rodar o projeto e enviar alterações.

## Requisitos

- Node.js 22 (veja o `.nvmrc`) e npm 10
- Docker (opcional, para o banco PostgreSQL local)
- Expo Go ou um emulador Android/iOS (para o aplicativo mobile)

## Preparando o ambiente

```bash
nvm use
npm install
cp apps/web/.env.example apps/web/.env
docker compose up -d
npm run db:migrate --workspace lamborghini-web
```

O `npm install` também executa o `prisma generate` da aplicação web.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Roda web e mobile em paralelo |
| `npm run dev:web` | Roda apenas o web em `http://localhost:3000` |
| `npm run dev:mobile` | Roda apenas o servidor do Expo |
| `npm run lint` | Lint em todos os workspaces |
| `npm run typecheck` | Checagem de tipos em todos os workspaces |
| `npm run test` | Roda todas as suítes de teste |
| `npm run test:coverage` | Roda os testes com relatório de cobertura |
| `npm run build` | Build de todos os workspaces |
| `npm run format` | Formata o código com o Prettier |

## Testes

- Web e pacotes usam **Vitest** (`*.test.ts` / `*.test.tsx` ao lado do código).
- O mobile usa **Jest** com `jest-expo` e Testing Library. Os testes do mobile ficam em `src/__tests__` ou ao lado dos componentes, nunca dentro de `src/app` (todo arquivo ali vira uma rota).
- Descrições de testes em inglês e comentários em português.

## Banco de dados

- Toda alteração em `apps/web/prisma/schema.prisma` precisa de migration: `npm run db:migrate --workspace lamborghini-web -- --name <nome>`.
- A CI aplica todas as migrations em um PostgreSQL limpo e falha se o schema tiver mudanças sem migration.

## Traduções

- Todo texto visível vem do `@lamborghini/translations`. Adicione a chave em **todos** os locales em `packages/translations/src/locales`. Um teste falha quando os locales estão dessincronizados.

## Pull requests

1. Crie uma branch a partir da `main`.
2. Garanta que `lint`, `typecheck`, `test` e `build` passam localmente.
3. Preencha o checklist do template de pull request.

by caiothedev<br />
#contributing