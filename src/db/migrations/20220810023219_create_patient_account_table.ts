import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("patient_account", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.date("dob").notNullable();
    table.string("ethnicity").notNullable();
    table.string("gender").notNullable();
    table.string("email").notNullable().unique();
    table.string("street").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("insurance_id").notNullable();
    table.string("member_id").notNullable();
    table.string("insurance_provider").notNullable();
    table.string("document").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {}
