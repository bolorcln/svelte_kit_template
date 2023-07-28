import { pgTable, text, bigint } from 'drizzle-orm/pg-core';

export const users = pgTable('auth_user', {
	id: text('id').primaryKey(),
	username: text('username').notNull()
});

export const user_keys = pgTable('user_key', {
	id: text('id').primaryKey(),
	hashed_password: text('hashed_password'),
	user_id: text('user_id')
		.notNull()
		.references(() => users.id)
});

export const user_sessions = pgTable('user_session', {
	id: text('id').primaryKey(),
	active_expires: bigint('active_expires', { mode: 'bigint' }).notNull(),
	idle_expires: bigint('idle_expires', { mode: 'bigint' }).notNull(),
	user_id: text('user_id')
		.notNull()
		.references(() => users.id)
});
