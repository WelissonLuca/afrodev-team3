const supertest = require('supertest');
const app = require('../index');
const model = require('../application/model/supply');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - SUPPLY without data', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    await request
      .get('/supply')
      .expect(200)
      .then((res) => expect(Array.isArray(res.body)).toBeTruthy());
  });

  it('Calling GET endpoint by id', async () => {
    await request
      .get('/supply/1')
      .expect(400)
      .then((res) => expect(res.body.error).toBeDefined());
  });

  it('Calling GET endpoint by name', async () => {
    await request
      .get('/supply/name/arroz')
      .expect(400)
      .then((res) => expect(res.body.error).toBeDefined());
  });
});

describe('Setting data in API - SUPPLY', () => {
  it('Calling POST endpoint', async () => {
    await request
      .post('/supply')
      .send({
        name: 'Arroz TIPO I',
        description: 'Arroz Branco TIPO I',
        category: 'Alimentos',
        type: 'KG',
        price: 4.5,
        quantity: 99,
      })
      .expect(201)
      .then((res) => expect(res.body.created_at).toBeTruthy());
  });
});

describe('Updating data in API - SUPPLY', () => {
  it('Calling PUT endpoint', async () => {
    await request
      .put('/supply/1')
      .send({
        name: 'Arroz TIPO II',
        description: 'Arroz Branco TIPO II',
        category: 'Alimentos',
        type: 'KG',
        price: 5.5,
        quantity: 100,
      })
      .expect(202)
      .then((res) => expect(res.body.price).toBe(5.5));
  });

  it('Calling PATCH endpoint', async () => {
    await request
      .patch('/supply/1')
      .send({
        price: 6.99,
      })
      .expect(202)
      .then((res) => expect(res.body.price).toBe('6.990'));
  });
});

describe('Getting data from API - SUPPLY with data', () => {
  it('Calling GET endpoint without parameters', async () => {
    await request
      .get('/supply')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
      });
  });

  it('Calling GET endpoint by id', async () => {
    await request
      .get('/supply/1')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('created_at');
      });
  });

  it('Calling GET endpoint by name', async () => {
    await request
      .get('/supply/name/roz')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
      });
  });
});

describe('Deleting data in API - SUPPLY', () => {
  it('Calling DELETE endpoint by id', async () => {
    await request.delete('/supply/1').expect(204);
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
