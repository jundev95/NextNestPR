import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const test = mysqlTable('test', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 255 }),
});
