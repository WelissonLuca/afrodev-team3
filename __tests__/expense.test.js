const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - EXPENSE without data', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it('Calling GET endpoint without parameters', async () => {
    await request
      .get('/expense')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(0);
      });
  });

  it('Calling GET endpoint by id', async () => {
    await request
      .get('/expense/1')
      .expect(404)
      .then((res) => expect(res.body.error).toBeDefined());
  });

  it('Calling GET endpoint by category', async () => {
    await request
      .get('/expense/category/purchase')
      .expect(404)
      .then((res) => expect(res.body.error).toBeDefined());
  });

  it('Calling GET endpoint by type', async () => {
    await request
      .get('/expense/type/purchase')
      .expect(404)
      .then((res) => expect(res.body.error).toBeDefined());
  });
});

describe('Setting data in API - EXPENSE', () => {
  it('Calling POST endpoint', async () => {
    await request
      .post('/expense')
      .send({
        description: 'Purchase of 50kg of White Rice',
        value: 225,
        category: 'purchase of aliments',
        type: 'purchase',
        date: '2021-04-23',
        status: 'released',
      })
      .expect(201)
      .then((res) => expect(res.body.created_at).toBeDefined());
  });
});

describe('Updating data in API - EXPENSE', () => {
  it('Calling PUT endpoint', async () => {
    await request
      .put('/expense/1')
      .send({
        description: 'Purchase of 50kg of White Rice',
        value: 230,
        category: 'purchase of aliments',
        type: 'purchase',
        date: '2021-04-23',
        status: 'approved',
      })
      .expect(202)
      .then((res) => expect(res.body.status).toBe('approved'));
  });

  it('Calling PATCH endpoint', async () => {
    await request
      .patch('/expense/1')
      .send({
        status: 'rejected',
      })
      .expect(202)
      .then((res) => expect(res.body.status).toBe('rejected'));
  });
});

describe('Getting data from API - EXPENSE with data', () => {
  it('Calling GET endpoint without parameters', async () => {
    await request
      .get('/expense')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
      });
  });

  it('Calling GET endpoint by id', async () => {
    await request
      .get('/expense/1')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('created_at');
      });
  });

  it('Calling GET endpoint by category', async () => {
    await request
      .get('/expense/category/purch')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
      });
  });

  it('Calling GET endpoint by type', async () => {
    await request
      .get('/expense/type/purchase')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
      });
  });
});

describe('Deleting data in API - EXPENSE', () => {
  it('Calling DELETE endpoint by id', async () => {
    await request.delete('/expense/1').expect(204);
  });

  afterAll(async (done) => {
    await sequelize.truncate({ force: true });
    await sequelize.close();
    done();
  });
});
