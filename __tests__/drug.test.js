const supertest = require('supertest')
const app = require('../index')

const request = supertest(app)
const sequelize = require('../config/connection')

describe('Ensure to get data from API - DRUG', () => {

  beforeAll(async () => {
    await sequelize.authenticate()
  })
  it('Ensure to GET Endpoint without parameters return content', async () => {
     await request.get('/drug')
    .expect(200)
    .then((res) => expect(Array.isArray(res.body)).toBeTruthy())
  })

  it('Ensure to POST endpoint insert content on database', async () => {
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
 it('Ensure to PUT endpoint update content', async () => {
     await request.put('/drug/1').send({
        name: "Benegrip",
        description: "Medicamento para gripe",
        quantity: 20,
        category: "outros"
      })
      .expect(202)
      .then((res) => expect(res.body.response.quantity).toBe(20))
})
 it('Ensure to PATCH endpoint update content', async () => {
       await request.patch('/drug/1').send({
        quantity: 10,
      })
      .expect(202)
      .then((res) => expect(res.body.quantity).toBe(res.body.quantity))
})
  afterAll(async (done) => {
    await sequelize.truncate({force: true})
    await sequelize.close()
    done()
  })
})  
