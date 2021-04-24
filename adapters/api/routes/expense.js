const controller = require('../../controllers/expense');
const validators = require('../validators/expense');

const invalidRequestReply = (request, reply, errors) => reply.status(errors.statusCode || 400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post(
    '/expense',
    validators.registerValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Expenses']
          #swagger.parameters['post expense object'] = {
            in: 'body',
            description: "New expense values",
            schema: {
                "$description": "Purchase of 50kg of White Rice",
                "$value": 225,
                "$category": "purchase of aliments",
                "$type": "purchase",
                "$date": "2021-04-23",
                "$status": "released"
                }
            },
          }
      */
      const errors = validators.validateRequest(request);
      if (errors.length) {
        // #swagger.responses[400]
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.post(request, reply);
      return reply.status(201).json(response);
    },
  );

  app.get('/expense', async (request, reply) => {
    //  #swagger.tags = ['Expenses']
    const response = await controller.get(request, reply);
    return reply.status(200).json(response);
  });

  app.get('/expense/:id', async (request, reply) => {
    /*  #swagger.tags = ['Expenses']
        #swagger.parameters['id'] = {
                in: 'path',
                description: 'expense ID',
                required: true,
                type: 'integer'
        }
    */
    const response = await controller.getById(
      request.params.id,
      request,
      reply,
    );
    if (response.statusCode) {
      // #swagger.responses[400]
      // #swagger.responses[404]
      return invalidRequestReply(request, reply, response);
    }
    return reply.status(200).json(response);
  });

  app.get('/expense/category/:category', async (request, reply) => {
    /*  #swagger.tags = ['Expenses']
        #swagger.parameters['category'] = {
                in: 'path',
                description: 'Expense Category',
                required: true,
                type: 'string'
        }
    */
    const response = await controller.getByCategory(
      request.params.category,
      request,
      reply,
    );
    if (response.statusCode) {
      // #swagger.responses[400]
      // #swagger.responses[404]
      return invalidRequestReply(request, reply, response);
    }
    return reply.status(200).json(response);
  });

  app.get('/expense/type/:type', async (request, reply) => {
    //  #swagger.tags = ['Expenses']
    /*  #swagger.tags = ['Expenses']
        #swagger.parameters['type'] = {
                in: 'path',
                description: 'Expense Type',
                required: true,
                type: 'string',
                enum: ['purchase', 'bill', 'salary', 'transport', 'maintenance']
        }
    */
    const response = await controller.getByType(
      request.params.type,
      request,
      reply,
    );
    if (response.statusCode) {
      // #swagger.responses[400]
      // #swagger.responses[404]
      return invalidRequestReply(request, reply, response);
    }
    return reply.status(200).json(response);
  });

  app.put(
    '/expense/:id',
    validators.updateValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Expenses']
          #swagger.parameters['id'] = {
                in: 'path',
                description: 'expense ID',
                required: true,
                type: 'integer'
          }
          #swagger.parameters['put expense object'] = {
            in: 'body',
            description: "New expense values",
            schema: {
                "$description": "Purchase of 50kg of White Rice",
                "$value": 230,
                "$category": "purchase of aliments",
                "$type": "purchase",
                "$date": "2021-04-24",
                "$status": "approved"
            }
          }
      */
      const errors = validators.validateRequest(request);
      if (errors.length) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.put(request.params.id, request, reply);
      if (response.statusCode) {
        // #swagger.responses[400]
        // #swagger.responses[404]
        return invalidRequestReply(request, reply, response);
      }
      return reply.status(202).json(response);
    },
  );

  app.patch(
    '/expense/:id',
    validators.patchValidator(),
    async (request, reply) => {
      /*  #swagger.tags = ['Expenses']
          #swagger.parameters['id'] = {
                in: 'path',
                description: 'expense ID',
                required: true,
                type: 'integer'
          }
          #swagger.parameters['patch expense object'] = {
            in: 'body',
            description: "New expense values",
            schema: {
                "$description": "Purchase of 500kg of White Rice",
                "$value": 2300,
                "$category": "purchase of aliments",
                "$type": "purchase",
                "$date": "2021-04-25",
                "$status": "rejected"
            }
          }
      */
      const errors = validators.validateRequest(request);
      if (errors.length) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.patch(
        request.params.id,
        request,
        reply,
      );
      if (response.statusCode) {
        // #swagger.responses[400]
        // #swagger.responses[404]
        return invalidRequestReply(request, reply, response);
      }
      return reply.status(202).json(response);
    },
  );

  app.delete('/expense/:id', async (request, reply) => {
    //  #swagger.tags = ['Expenses']
    const response = await controller.delete(request.params.id, request, reply);
    if (response.statusCode) {
      // #swagger.responses[400]
      // #swagger.responses[404]
      return invalidRequestReply(request, reply, response);
    }
    return reply.status(204).send();
  });
};
