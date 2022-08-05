import Knex from "knex";
import KnexConfig from "./knexfile";

const knex = Knex(KnexConfig.development);

export default knex;
