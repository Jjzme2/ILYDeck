import { Pool } from 'pg';
import { handleDatabaseError } from './utils/ErrorUtils';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database');
    return client;
  } catch (error) {
    handleDatabaseError(error);
    throw new Error('Error connecting to the database');
  }
};

const executeQuery = async (query, params) => {
  try {
    const client = await connectToDatabase();
    const result = await client.query(query, params);
    client.release();
    return result.rows;
  } catch (error) {
    handleDatabaseError(error);
    throw new Error('Error executing query');
  }
};

export { connectToDatabase, executeQuery };
