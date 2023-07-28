import 'dotenv/config';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

const main = async () => {
	const sql = postgres(process.env.DATABASE_URL, { max: 1 });
	const db = drizzle(sql);
	await migrate(db, { migrationsFolder: 'drizzle' });
};

main()
	.then(() => {
		console.log('Successfully migrated');
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
		console.log('Done');
		process.exit();
	});
