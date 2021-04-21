const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - SUPPLY', () => {
    beforeAll(async () => {
        await sequelize.authenticate();
    });

    it('Calling GET endpoint without parameters', async () => {
        const res = await request.get('/supply');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual([]);
    })

    it('Calling GET endpoint by id', async () => {
        const res = await request.get('/supply/1');
        expect(res.status).toBe(200);
        expect(res.body).toBe(null);
    })
})

describe('Setting data from API - SUPPLY', () => {

    it('Calling POST endpoint', async () => {
        const res = await request.post('/supply').send({
            name: "Arroz",
            description: "Arroz branco",
            category: "Alimento",
            type: "Kg",
            price: 4.50,
            quantity: 99.999
        });
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(1);
    })

    it('Calling PUT endpoint', async () => {
        const res = await request.put('/supply/1').send({
            name: "Arroz",
            description: "Arroz branco",
            category: "Alimento",
            type: "Kg",
            price: 5.50,
            quantity: 99.999
        });
        expect(res.status).toBe(200);
        expect(res.body.price).toBe(5.50);
    })

    it('Calling PATCH endpoint', async () => {
        const res = await request.patch('/supply/1').send({
            price: 6.99
        });
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual([1]);
    })

})

describe('Getting data from API - SUPPLY', () => {

    it('Calling GET endpoint without parameters', async () => {
        const res = await request.get('/supply');
        expect(res.status).toBe(200);
        expect(() => {
            res.body.length > 0;
        });
    })

    it('Calling GET endpoint by id', async () => {
        const res = await request.get('/supply/1');
        expect(res.status).toBe(200);
        expect(() => {
            res.body.length > 0;
        });
    })

    it('Calling GET endpoint by name', async () => {
        const res = await request.get('/supply/name/Arroz');
        expect(res.status).toBe(200);
        expect(() => {
            res.body.length > 0;
        });
    })
})

describe('Deleting data from API - SUPPLY', () => {

    it('Calling DELETE endpoint by id', async () => {
        const res = await request.delete('/supply/1');
        expect(res.status).toBe(204);
    })


    afterAll(async (done) => {
        await sequelize.truncate({force: true});
        await sequelize.close();
        done();
    });
})