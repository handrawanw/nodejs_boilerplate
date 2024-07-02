## Create Module
- Run to setup boilerplate

```bash
  node boilerplate make:module users
```

## Setup DB
- Setup and create .env file

- Run migration to setup tables (directory: db/migrations)

```bash
  pnpm knex:migrate:latest
```

- Run migration to setup data (directory: db/seeds)

```bash
  pnpm knex:seed:run
```

## Run project
- install pnpm your computer with npm
```
npm install -g pnpm
```

- Run for pnpm install your terminal
```bash
  pnpm install
```

- Run for development/local

```bash
  pnpm dev
```

- Run for deployment

```bash
  pnpm start
```


## Style Code
- penulisan variabel, file .js dan folder menggunakan gaya snake_case
- penulisan nama fungsi menggunakan gaya camelCase
