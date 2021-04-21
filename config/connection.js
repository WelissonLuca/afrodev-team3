const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Family = require('../application/model/families');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Family.init(connection);

module.exports = connection;
