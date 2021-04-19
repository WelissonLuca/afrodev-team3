const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return '.env.dev';
    case 'test':
      return '.env.test';
    default:
      return '.env';
  }
};

require('dotenv').config({
  path: getEnvironment(),
});
