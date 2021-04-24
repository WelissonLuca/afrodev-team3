const express = require('express');
const cors = require('cors');
const consign = require('consign');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./config/connection');
const swaggerDocument = require('./swagger_output.json');

const PORT = process.env.NODE_ENV !== 'test' ? 3000 : 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.use(cors());
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    app.use(
      '/api-docs',
      (req, res, next) => {
        swaggerDocument.host = req.get('host');
        req.swaggerDoc = swaggerDocument;
        next();
      },
      swaggerUi.serve,
      swaggerUi.setup(),
    );

    consign().include('adapters/api/routes').into(app);

    app.listen(PORT, () => console.log('listening port', PORT));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
module.exports = app;
