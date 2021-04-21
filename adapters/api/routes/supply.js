const controller = require('../../controllers/supply');
const validators = require('../validators/supply');

const invalidRequestReply = (request, reply, errors) =>
  reply.status(400).json({
    method: request.method,
    status: reply.statusCode,
    error: errors,
  });

module.exports = (app) => {
  app.post(
    '/supply',
    validators.registerValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Supplies']
          #swagger.parameters['post supply object'] = {
            in: 'body',
            description: "New supply values",
            schema: {
                "$name": "new supply",
                "$description": "supply description",
                "$category": "supply category",
                "$type": "supply type",
                "$price": 999.999,
                "$quantity": 99.999
            }
    } */
      const errors = validators.validateRequest(request);
      if (errors.length > 0) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.post(request, reply);
      return reply.status(200).json(response);
    },
  );

  app.get('/supply', async (request, reply) => {
    //  #swagger.tags = ['Supplies']
    const response = await controller.get(request, reply);
    return reply.status(200).json(response);
  });

  app.get('/supply/:id', async (request, reply) => {
    //  #swagger.tags = ['Supplies']
    const response = await controller.getById(
      request.params.id,
      request,
      reply,
    );
    return reply.status(200).json(response);
  });

  app.get('/supply/name/:name', async (request, reply) => {
    //  #swagger.tags = ['Supplies']
    const response = await controller.getByName(
      request.params.name,
      request,
      reply,
    );
    return reply.status(200).json(response);
  });

  app.put(
    '/supply/:id',
    validators.updateValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Supplies']
          #swagger.parameters['put supply object'] = {
            in: 'body',
            description: "New supply values",
            schema: {
                "$name": "new supply",
                "$description": "supply description",
                "$category": "supply category",
                "$type": "supply type",
                "$price": 999.999,
                "$quantity": 99.999
            }
    } */
      const errors = validators.validateRequest(request);
      if (errors.length > 0) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.put(request.params.id, request, reply);
      return reply.status(200).json(response);
    },
  );

  app.patch(
    '/supply/:id',
    validators.patchValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Supplies']
          #swagger.parameters['patch supply object'] = {
            in: 'body',
            description: "New supply values",
            schema: {
                "$name": "new supply",
                "$description": "supply description",
                "$category": "supply category",
                "$type": "supply type",
                "$price": 999.999,
                "$quantity": 99.999
            }
    } */
      const errors = validators.validateRequest(request);
      if (errors.length > 0) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.patch(
        request.params.id,
        request,
        reply,
      );
      return reply.status(200).json(response);
    },
  );

  app.delete('/supply/:id', async (request, reply) => {
    //  #swagger.tags = ['Supplies']
    const response = await controller.delete(request.params.id, request, reply);
    return reply.status(204).send();
  });
};
