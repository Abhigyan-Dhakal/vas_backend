import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_account", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.date("dob").notNullable();
    table.string("ethnicity").notNullable();
    table.string("gender").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("street").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.boolean("isAdmin").defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_account");
}
