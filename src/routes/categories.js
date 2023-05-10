const express = require('express');
const routes = express.Router();

const CategoriesController = require('../controllers/categories');

routes.get('/categories', CategoriesController.index);
routes.get('/categories/:id', CategoriesController.show);
routes.get('/categories/:id/videos', CategoriesController.showVideos);
routes.post('/categories', CategoriesController.store);
routes.put('/categories/:id', CategoriesController.update);
routes.delete('/categories/:id', CategoriesController.destroy);

module.exports = routes;