const controller = require("../../controllers/drug");
const validators = require("../validators/ong");

const invalidRequestReply = (request, reply, errors) =>
  reply.status(400).json({
    method: request.method,
    status: reply.statusCode,
    error: errors,
  });

module.exports = (app) => {
  app.post("/drug", validators.registerValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.lenght > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.status(201).json(response);
  });

  app.get("/drug", async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.status(200).json(response);
  });

  app.get("/drug/:id", async (request, reply) => {
    const response = await controller.getById(
      request.params.id,
      request,
      reply
    );
    return reply.status(200).json(response);
  });

  app.put("/drug/:id", validators.updateValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.lenght > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.patch('/drug/:id', validators.patchValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.lenght > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(response);
    }
  );
};
