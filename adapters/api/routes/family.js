const controller = require('../../controllers/family');
// const validators = require('../validators/ong');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/family', async (request, reply) => {
    const response = await controller.post(request, reply);
    console.log(response)
    return reply.json(response);
  });

  app.get('/family', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.patch('/family/:id', async (request, reply) => {
    /*  #swagger.parameters['patch ong object'] = {
            in: 'body',
            description: "New ong values",
            schema: {

            }
    } */
    // const errors = validators.validateRequest(request);
    // if (errors.length > 0) {
    //   return invalidRequestReply(request, reply, errors);
    // }
    const response = await controller.patch(request.params.id, request, reply);
    console.log(response);
    return reply.json(response);
  });


  app.delete('/family/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};

