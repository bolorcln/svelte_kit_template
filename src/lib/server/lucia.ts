import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { github } from '@lucia-auth/oauth/providers';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import { sql } from './db';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: postgresAdapter(sql, {
		user: 'auth_user',
		key: 'user_key',
		session: 'user_session'
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export const githubAuth = github(auth, {
	clientId: CLIENT_ID,
	clientSecret: CLIENT_SECRET
});

export type Auth = typeof auth;
