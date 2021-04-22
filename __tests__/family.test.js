const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - FAMILY without data', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    await request
      .get('/family')
      .expect(200)
      .then((res) => expect(Array.isArray(res.body)).toBeTruthy());
  });

  it('Calling GET endpoint without parameters id', async () => {
    await request
      .get('/family/1')
      .expect(200)
      .then((res) => expect(Array.isArray(res.body)).toBeTruthy());
  });
});
