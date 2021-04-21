require('./environment');

const config = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: process.env.MYSQL_DIALECT,
  define: {
    timestamps: true,
  },
};

module.exports = config;
