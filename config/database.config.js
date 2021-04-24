require('./environment');
require('dotenv').config();

const config = {
  username: process.env.MYSQL_USERNAME || 'admin',
  password: process.env.MYSQL_PASSWORD || 'admin',
  database: process.env.MYSQL_DATABASE || 'mysqldb',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
  define: {
    timestamps: true,
    paranoid: true,
  },
};

module.exports = config;
