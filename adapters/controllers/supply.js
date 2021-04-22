const supplyService = require('../../application/services/supply');

exports.post = async (request) => {
  const result = await supplyService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await supplyService.findAll(request.body);
  return result;
};

exports.getByName = async (name) => {
  const result = await supplyService.findByName(name);
  return result;
};

exports.getById = async (id) => {
  const result = await supplyService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await supplyService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await supplyService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await supplyService.delete(id);
  return result;
};
