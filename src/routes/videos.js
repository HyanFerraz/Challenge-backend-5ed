const express = require('express');
const routes = express.Router();

const VideoController = require('../controllers/videos');

routes.get('/videos', VideoController.index);
routes.get('/video/:id', VideoController.show);
routes.get('/videos/search=:search', VideoController.search)
routes.post('/videos', VideoController.store);
routes.put('/videos/:id', VideoController.update);
routes.delete('/videos/:id', VideoController.destroy);

module.exports = routes;