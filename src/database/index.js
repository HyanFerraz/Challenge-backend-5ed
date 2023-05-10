const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

const Videos = require('../models/Videos');
const Categories = require('../models/Categories');
const Users = require('../models/Users');

Videos.init(connection);
Categories.init(connection);
Users.init(connection);

Videos.associate(connection.models);
Categories.associate(connection.models);

module.exports = connection;
