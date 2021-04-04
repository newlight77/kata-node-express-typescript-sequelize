import { parse } from 'path';
import { Pool } from 'pg';

const dbaddress = process.env.DB_ADDRESS || 'localhost';
const dbport = process.env.DB_PORT || '5432';
const dbname = process.env.DB_NAME || 'consultant';
const dbuser = process.env.DB_USER || 'consultant';
const dbpassword = process.env.DB_PASSWORD || 'Pa55w0rd';
const dbdialiect = process.env.DB_DIALECT || 'postgres';

console.info("connection string", `${dbdialiect}://${dbuser}:${dbpassword}@${dbaddress}:${dbport}/${dbname}`);

const pool = new Pool ({
    connectionString: `${dbdialiect}://${dbuser}:${dbpassword}@${dbaddress}:${dbport}/${dbname}`,
    idleTimeoutMillis: 30000,
    max: 20
});

export default pool;