const supertest = require('supertest')
const app = require('../index')

const request = supertest(app)
const sequelize = require('../config/connection')
const { response } = require('../index')

describe('Ensure to get data from API - DRUG', () => {

  beforeAll(async () => {
    await sequelize.authenticate()
  })
  
    it('Calling GET endpoint without parameters', async () => {
      await request.get('/drug')
     .expect(200)
     .then((res) => expect(Array.isArray(res.body)).toBeTruthy())
   })

    it('Calling POST endpoint', async () => {
      await request
      .post('/drug')
      .send({
        name: "Benegrip",
        description: "Medicamento para gripe",
        quantity: 18,
        category: "outros"
     })
      .expect(201)
      .then((res) => expect(res.body.created_at).toBeTruthy());
    })

    it('Calling GET endpoint by id', async () => {
      await request.get('/drug/1')
      .expect(200)
      .then((res) => expect(res.body).toBeDefined())
    })


    it('Calling PUT endpoint', async () => {
      await request.put('/drug/1').send({
         name: "Benegrip",
         description: "Medicamento para gripe",
         quantity: 20,
         category: "outros"
       })
       .expect(202)
       .then((res) => expect(res.body.response.quantity).toBe(20))
   })
    it('Calling PATCH endpoint', async () => {
        await request.patch('/drug/1').send({
         quantity: 10,
       })
       .expect(202)
       .then((res) => expect(res.body.quantity).toBe(res.body.quantity))
    })

    it('Calling DELETE endpoint by id', async () => {
      await request.delete('/drug/1').expect(204);
    });

    afterAll(async (done) => {
      await sequelize.truncate({force: true})
      await sequelize.close()
      done()
    })
})