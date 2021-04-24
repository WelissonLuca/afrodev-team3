const supertest = require('supertest');
const app = require('../index');
const model = require('../application/model/ong');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - ONG', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    // Sends GET Request to /test endpoint

    const res = await request.get('/ong');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);
    // ...
  });

  afterAll(async (done) => {
    await model.destroy({
      truncate: true,
      drop: true,
      force: true,
    });
    await sequelize.close();
    done();
  });
});
