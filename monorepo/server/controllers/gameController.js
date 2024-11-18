import { getGames } from '../services/gameService';
import { handleNetworkError, handleUnexpectedResponse } from '../utils/ErrorUtils';

const fetchGames = async (req, res) => {
  try {
    const games = await getGames();
    res.status(200).json(games);
  } catch (error) {
    if (error.isNetworkError) {
      const handledError = handleNetworkError(error);
      res.status(500).json(handledError);
    } else {
      const handledError = handleUnexpectedResponse(error);
      res.status(500).json(handledError);
    }
  }
};

export { fetchGames };
