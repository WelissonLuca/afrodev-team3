require('./environment');

const config = {
  username: process.env.MYSQL_USERNAME || 'admin',
  password: process.env.MYSQL_PASSWORD || '12345' ,
  database: process.env.MYSQL_DATABASE || 'mysqldb',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
  define: {
    timestamps: true,
  },
};

module.exports = config;
