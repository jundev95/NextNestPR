import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const tests = mysqlTable('test', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 255 }),
});
