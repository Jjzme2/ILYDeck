import gameRoutes from './gameRoutes.js';

const applyRoutes = (app) => {
  app.use('/api/games', gameRoutes);
};

export default applyRoutes;
