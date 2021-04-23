const controller = require('../../controllers/drug');
const validators = require('../validators/ong');

const invalidRequestReply = (request, reply, errors) =>
  reply.status(400).json({
    method: request.method,
    status: reply.statusCode,
    error: errors,
  });

module.exports = (app) => {
  app.post('/drug', validators.registerValidator(), async (request, reply) => {
    /*#swagger.tags = ['Drugs']
    #swagger.parameters['post drug object'] = {
        in: 'body',
        description: "New drug values",
        schema: {
          "$name": "new drug",
          "$quantity": "999.999",
          "$category": "drug category",
          "$description": "drug description",
        }
      }*/
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/drug', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/drug/:id', async (request, reply) => {
    const response = await controller.getById(
      request.params.id,
      request,
      reply
    );
    return reply.json(response);
  });

  app.put('/drug/:id', validators.updateValidator(), async (request, reply) => {
    /*#swagger.tags= ['Drugs']
    #swagger.parameters['put drug object'] = {
        in: 'body',
        description: "New drug values",
        schema: {
          "$name": "new drug",
          "$quantity": "999.999",
          "$category": "drug category",
          "$description": "drug description",
        }
      }*/
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(
      request.params.id,
      request,
      reply
    );
    return reply.json(response);
  });

  app.patch('/drug/:id', validators.patchValidator(), async (request, reply) => {
    /*#swagger.tags = ['Drugs']
      #swagger.parameters['patch drug object'] = {
        in: 'body',
        description: "New drug values",
        schema: {
          "$name": "new drug",
          "$quantity": "999.999",
          "$category": "drug category",
          "$description": "drug description",
        }
      }*/
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(
      request.params.id,
      request,
      reply
    );
    return reply.json(response);
    }
  );

  app.delete('/drug/:id', async (request, reply) => {
    const response = await controller.delete(
      request.params.id,
      request,
      reply
    );
    return reply.json(response);
  })
};