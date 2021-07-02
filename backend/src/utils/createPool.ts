import { Pool } from "pg";

const developmentConnectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const productionConnectionUrl = process.env.DATABASE_URL;
export const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? productionConnectionUrl : developmentConnectionString,
});
