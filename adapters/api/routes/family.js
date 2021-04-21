const controller = require('../../controllers/family');
const validators = require('../validators/ong');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {

  app.post('/family',  async (request, reply) => {
    /*  #swagger.parameters['post ong object'] = {
            in: 'body',
            description: "New ong values",
            schema: {
                "$name": "new ong",
                "$description": "ong description",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/family', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

}
