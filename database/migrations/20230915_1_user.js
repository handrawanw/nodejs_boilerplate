/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("users",function(table){
    table.bigIncrements();
    table.text("username").defaultTo(null);
    table.string("email",64).defaultTo(null);
    table.text("password").defaultTo(null);
    table.boolean("verified").defaultTo(false);
    table.timestamp("birthday").defaultTo(null);
    table.smallint("gender").defaultTo(null);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.smallint("is_deleted").defaultTo(0);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
