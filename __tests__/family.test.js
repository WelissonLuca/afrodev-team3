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

  it('Calling GET endpoint by id', async () => {
    await request
      .get('/family/1')
      .expect(404)
      .then((res) => expect(res.body.error));
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
      .expect(201)
      .then((res) => expect(res.body.created_at).toBeTruthy());
  });
});

describe('Updating data in API - FAMILY', () => {
  it('Calling PUT endpoint', async () => {
    const result = await request
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
      });

    const { id } = result.body;

    await request
      .put(`/family/${id}`)
      .send({
        name: 'My family',
        email: 'bb@bbb.com',
        phone: '(19) 99999-9999',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(200)
      .then((res) => expect(res.body.updated_at).toBeTruthy());
  });
});

it('Calling PATCH endpoint', async () => {
  const result = await request
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
    });

  const { id } = result.body;
  await request
    .patch(`/family/${id}`)
    .send({
      name: 'John Doe',
    })
    .expect(200)
    .then((res) => expect(res.body.name).toBe(res.body.name));
});

describe('Setting errors update data from API - Family', () => {
  it('Calling PUT endpoint endpoint force id not exists', async () => {
    await request
      .put('/family/10')
      .send({
        name: 'My family',
        email: 'bb@bbb.com',
        phone: '(19) 99999-9999',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(404)
      .then((res) => expect(res.body.error));
  });

  it('Calling PUT endpoint endpoint force number phone invalid', async () => {
    await request
      .put('/family/1')
      .send({
        name: 'My family',
        email: 'bb@bbb.com',
        phone: '(19) 49999',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(400)
      .then((res) => expect(res.body.error).toBeTruthy());
  });

  it('Calling PATCH endpoint force id not exists', async () => {
    await request
      .patch('/family/10')
      .send({
        name: 'John Doe',
      })
      .expect(404)
      .then((res) => expect(res.body.name).toBe(res.body.name));
  });
});

describe('Getting data from API - Family with data', () => {
  it('Calling GET endpoint without parameters', async () => {
    const result = await request.post('/family').send({
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
    });

    const { id } = result.body;
    await request;
    await request
      .get('/family')
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(Number(id));
      });
  });

  it('Calling GET endpoint by id', async () => {
    const result = await request.post('/family').send({
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
    });

    const { id } = result.body;
    await request
      .get(`/family/${id}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('created_at');
      });
  });
});
describe('Setting errors data from API - Family', () => {
  it('Calling POST endpoint force cpf is not valid error ', async () => {
    await request
      .post('/family')
      .send({
        name: 'new family',
        birth_date: '2021-04-10',
        email: 'aaa@aaa.com',
        phone: '(19) 99999-9999',
        cpf: '000.000.000-62',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(400)
      .then((res) => expect(res.body.error).toBeDefined());
  });

  it('Calling POST endpoint force  empty fields error ', async () => {
    await request
      .post('/family')
      .send({
        name: '',
        birth_date: '',
        email: '',
        phone: '',
        cpf: '',
        address: '',
        civil_status: '',
        gender: '',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(400)
      .then((res) => expect(res.body.error).toBeDefined());
  });

  it('Calling POST endpoint force phone format error ', async () => {
    await request
      .post('/family')
      .send({
        name: 'new family',
        birth_date: '2021-04-10',
        email: 'aaa@aaa.com',
        phone: ' 99999-9999',
        cpf: '000.000.000-62',
        address: '123 Main',
        civil_status: 'casado',
        gender: 'masculino',
        number_members: 20,
        children: 4,
        per_capita_income: 200.0,
      })
      .expect(400)
      .then((res) => expect(res.body.error).toBeDefined());
  });
});

describe('Delete data error id not exists from API - Family', () => {
  it('Calling DELETE endpoint by id error', async () => {
    await request
      .delete('/family/0')
      .expect(404)
      .then((res) => expect(res.body.error));
  });
});

describe('Delete data from API - Family ', () => {
  it('Calling DELETE endpoint by id', async () => {
    const result = await request
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
      });
    const { id } = result.body;
    await request
      .delete(`/family/${id}`)
      .expect(204);
  });
  afterAll(async (done) => {
    await sequelize.truncate({ force: true });
    await sequelize.close();
    done();
  });
});
