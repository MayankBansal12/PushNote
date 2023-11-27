# PushNote

This is a Turborepo for PushNote with React frontend and Express backend.

### Apps and Packages

- `backend`: an [Express](https://expressjs.com/) server
- `frontend`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a React UI library for react components
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json is used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Using this repo

Run the following command:

```sh
git clone https://github.com/alexrusin/react-express-turbo.git
cd react-express-turbo
1. pnpm install
2. pnpm build or
turbo run build
3. pnpm dev or
turbo run dev
```

## Testing and linting

```sh
pnpm lint
pnpm test
```
