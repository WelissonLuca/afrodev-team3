const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Drug = require('../application/model/drug');
const Family = require('../application/model/families');
const Supply = require('../application/model/supply');
const Expense = require('../application/model/expense');

const connection = new Sequelize(dbConfiguration);

Ong.init(connection);
Drug.init(connection);
Family.init(connection);
Supply.init(connection);
Expense.init(connection);

module.exports = connection;
