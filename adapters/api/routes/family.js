const controller = require('../../controllers/family');

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

  app.patch('/family/:id', async (request, reply) => {
    const response = await controller.patch(request.params.id, request, reply);
    console.log(response);
    return reply.json(response);
  });

  app.delete('/family/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
