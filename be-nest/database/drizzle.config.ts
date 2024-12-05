// import 'dotenv/config';
import { drizzle } from 'drizzle-orm/singlestore/driver';
import mysql from 'mysql2/promise';
import ENV from '../src/common/util/env';

const poolConnection = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  port: Number(ENV.DB_PORT),
});

export const db = drizzle({ client: poolConnection });
