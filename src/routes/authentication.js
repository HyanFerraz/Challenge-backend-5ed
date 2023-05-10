const express = require('express');
const routes = express.Router();

const AuthenticationController = require('../controllers/authentication');

routes.post('/login', AuthenticationController.login);
routes.post('/register', AuthenticationController.register);

module.exports = routes;