// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path=require("path");

require("dotenv").config()

module.exports = {
  client: 'pg',
  connection: {
    host:process.env.HOST_DB,
    database: process.env.DBNAME_DB,
    port:process.env.PORT_DB,
    user:process.env.USERNAME_DB,
    password:process.env.PASSWORD_DB
  },
  pool: {
    min: 2,
    max: 100
  },
  migrations: {
    directory:path.join(__dirname,"database", "migrations")
  },
  seeds: {
    directory:path.join(__dirname,"database", "seeds")
  }
};
