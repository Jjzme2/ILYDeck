import express from 'express';
import { fetchGames } from '../controllers/gameController';

const router = express.Router();

router.get('/api/games', fetchGames);

export default router;
