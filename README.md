## Create Module
- Run to setup boilerplate

```bash
  node boilerplate make:module users
```

## Setup DB
- Setup and create .env file

- Run migration to setup tables (directory: db/migrations)

```bash
  yarn knex:migrate:latest
```

- Run migration to setup data (directory: db/seeds)

```bash
  yarn knex:seed:run
```

## Run project
- install yarn your computer with npm
```
npm install -g yarn
```

- Run for yarn install your terminal
```bash
  yarn install
```

- Run for development/local

```bash
  yarn dev
```

- Run for deployment

```bash
  yarn start
```


## Style Code
- penulisan variabel, file .js dan folder menggunakan gaya snake_case
- penulisan nama fungsi menggunakan gaya camelCase
