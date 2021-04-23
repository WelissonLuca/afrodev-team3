const supertest = require('supertest')
const app = require('../index')

const request = supertest(app)
const sequelize = require('../config/connection')

describe('Ensure to get data from API - DRUG', () => {

  beforeAll(async () => {
    await sequelize.authenticate()
  })
  it('Ensure to GET Endpoint without parameters return content', async () => {
    const res = await request.get('/drug')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBeTruthy()
  })
  it('Ensure to POST endpoint insert content on database', async () => {
   
     const res = await request.post('/drug').send({
      name: "Benegrip",
      description: "Medicamento para gripe",
      quantity: 18.1,
      category: "Comum"
     })
     expect(201)
     expect(res.body.created_at).toBeTruthy()
    })
 it('Ensure to PUT endpoint update content', async () => {
    const res = await request.put('/drug/1').send({
        name: "Benegrip",
        description: "Medicamento para gripe",
        quantity: 20,
        category: "Comum"
      })
      expect(202)
      expect(res.body.quantity).toBe(20)
    })
 it('Ensure to PATCH endpoint update content', async () => {
      const res = await request.put('/drug/1').send({
        quantity: 10,
      })
      expect(202)
      expect(res.body.quantity).toBe(10)
    })
  afterAll(async (done) => {
    await sequelize.truncate({force: true})
    await sequelize.close()
    done()
  })
})  
