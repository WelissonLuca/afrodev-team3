const controller = require('../../controllers/family');
// const validators = require('../validators/ong');

// const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
//   method: request.method,
//   status: reply.statusCode,
//   error: errors,
// });

module.exports = (app) => {
  app.post('/family', async (request, reply) => {
    const response = await controller.post(request, reply);
    console.log(response);
    return reply.json(response);
  });

  app.get('/family', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });
  app.get('/family/:id', async (request, reply) => {
    const response = await controller.getById(
      request.params.id,
      request,
      reply,
    );
    return reply.json(response);
  });

  app.put('/family/:id', async (request, reply) => {
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });
};
