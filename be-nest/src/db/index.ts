// drizzle DB 객체, 이걸 사용해서 DB 관련 동작 처리

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';

export const db = drizzle(process.env.DATABASE_URL);
