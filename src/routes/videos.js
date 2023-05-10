const express = require('express');
const routes = express.Router();

const VideoController = require('../controllers/videos');
const authMiddleware = require('../middlewares/jwtAuth');

routes.get('/videos',authMiddleware.verifyToken , VideoController.index);
routes.get('/video/:id',authMiddleware.verifyToken, VideoController.show);
routes.get('/videos/search=:search',authMiddleware.verifyToken, VideoController.search)
routes.post('/videos',authMiddleware.verifyToken, VideoController.store);
routes.put('/videos/:id',authMiddleware.verifyToken, VideoController.update);
routes.delete('/videos/:id',authMiddleware.verifyToken, VideoController.destroy);

module.exports = routes;