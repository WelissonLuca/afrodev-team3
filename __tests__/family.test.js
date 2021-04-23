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

  it('Calling GET by id', async () => {
    await request
      .get('/family/1')
      .expect(200)
      .then((res) => expect(Array.isArray(res.body)).toBeTruthy());
  });
});

describe('Setting data from API - Family ', () => {
  it('Calling POST endpoint', async () => {
    await request
      .post('/family')
      .send({
        name: 'new family',
        birth_date: '2021-04-10',
        email: 'aaa@aaa.com',
        phone: '(19) 99999-9999',
        cpf: '469.610.370-62',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(200)
      .then((res) => expect(res.body.created_at).toBeTruthy());
  });
});
