const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Drug = require('../application/model/drug');
const Supply = require('../application/model/supply');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Drug.init(connection);
Supply.init(connection);

module.exports = connection;
