import { executeQuery } from '../database';
import { handleDatabaseError } from '../utils/ErrorUtils';

const tableName = 'games';

const getGames = async () => {
  try {
    const query = `SELECT * FROM ${tableName}` ;
    const games = await executeQuery(query);
    return games;
  } catch (error) {
    handleDatabaseError(error);
    throw new Error('Error fetching games from the database');
  }
};

export { getGames };
