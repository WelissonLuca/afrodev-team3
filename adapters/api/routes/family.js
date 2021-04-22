const controller = require('../../controllers/family');
const validators = require('../validators/family');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});
module.exports = (app) => {
  app.post('/family', validators.registerValidator(), async (request, reply) => {
		/*  #swagger.parameters['post family object'] = {
            in: 'body',
            description: "New family values",
            schema: {
                "$name": "new family",
                "$birth_date": "2021-04-10",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999",
                "$cpf": "000.000.000-00",
                "$address": "123 Main",
                "$civil_status": "casado",
                "gender": "masculino",
                "number_members": 20,
                "children": 4,
                "$per_capita_income": "1200"
            }
    } */
		const errors = validators.validateRequest(request);
		if (errors.length > 0) {
			return invalidRequestReply(request, reply, errors);
		}

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

  app.put('/family/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put family object'] = {
            in: 'body',
            description: "New family values",
            schema: {
               "$name": "new family",
                "$birth_date": "yy-yy-yyyy",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999",
                "$address": "123 Main",
                "$civil_status": "casado",
                "number_members": 20,
                "children": 4,
                "$per_capita_income": "1200"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.patch('/family/:id', async (request, reply) => {
    /* #swagger.parameters['patch family object'] = {
        in: 'body',
        description: "New family values",
        schema: {
           "$name": "new family",
                "$name": "new family",
                "$birth_date": "yy-yy-yyyy",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999",
                "$address": "123 Main",
                "$civil_status": "casado",
                "number_members": 20,
                "children": 4,
                "$per_capita_income": "1200"
        }
      } */
    const response = await controller.patch(request.params.id, request, reply);
    console.log(response);
    return reply.json(response);
  });

  app.delete('/family/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
