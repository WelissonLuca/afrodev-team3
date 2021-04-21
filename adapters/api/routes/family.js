const controller = require('../../controllers/family');

module.exports = (app) => {
  app.post('/family', async (request, reply) => {
    const response = await controller.post(request, reply);
    console.log(response)
    return reply.json(response);
  });
};

