import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const boards = mysqlTable('boards', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 255 }),
});
