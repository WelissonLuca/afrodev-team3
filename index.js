const express = require('express');
const consign = require('consign');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./config/connection');
const swaggerDocument = require('./swagger_output.json');

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true,
    }));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    consign()
      .include('adapters/api/routes')
      .into(app);

    app.listen(3000, () => console.log('listening port 3000'));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
module.exports = app;
