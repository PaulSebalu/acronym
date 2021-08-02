import { Pool } from 'pg';
import env from 'dotenv';

env.config();

// eslint-disable-next-line import/no-mutable-exports
let pool;

if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    connectionString: process.env.TEST_DATABASE_URL,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

export default pool;
