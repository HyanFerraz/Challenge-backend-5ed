const express = require('express');
const routes = express.Router();

const CategoriesController = require('../controllers/categories');
const authMiddleware = require('../middlewares/jwtAuth');

routes.get('/categories',authMiddleware.verifyToken, CategoriesController.index);
routes.get('/categories/:id',authMiddleware.verifyToken, CategoriesController.show);
routes.get('/categories/:id/videos',authMiddleware.verifyToken, CategoriesController.showVideos);
routes.post('/categories',authMiddleware.verifyToken, CategoriesController.store);
routes.put('/categories/:id',authMiddleware.verifyToken, CategoriesController.update);
routes.delete('/categories/:id',authMiddleware.verifyToken, CategoriesController.destroy);

module.exports = routes;