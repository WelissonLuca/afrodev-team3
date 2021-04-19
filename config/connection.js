const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);

module.exports = connection;
