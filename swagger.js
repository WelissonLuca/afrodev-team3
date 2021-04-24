const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './adapters/api/routes/ong.js',
  './adapters/api/routes/supply.js',
  './adapters/api/routes/expense.js',
];

swaggerAutogen(outputFile, endpointsFiles);
