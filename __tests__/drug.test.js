const supertest = require('supertest')
const app = require('../index')

const request = supertest(app)
const sequelize = require('../config/connection')

const Drug =require('../application/model/drug')

describe('Ensure to get data from API - DRUG', () => {

  beforeAll(async () => {
    await sequelize.authenticate()
  })
  


  it('Ensure to GET Endpoint without parameters return content', async () => {
    const res = await request.get('/drug')
    expect(res.status).toBe(200)
    expect(res)
  })


  it('Ensure to POST endpoint insert content on database', async () => {
   
     const res = await request.post('/drug').send({
      name: "Benegrip",
      description: "Medicamento para gripe",
      quantity: 18.1,
      category: "Comum"
     })
     expect(res.status).toBe(200)
     expect({
      name: "Benegrip",
      description: "Medicamento para gripe",
      quantity: 18.1,
      category: "Comum"
     })
    })

  afterAll(async (done) => {
    await sequelize.close()
    done()
  })
})  
