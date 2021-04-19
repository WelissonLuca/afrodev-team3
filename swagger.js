const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./adapters/api/routes/ong.js'];

swaggerAutogen(outputFile, endpointsFiles);
