const ongService = require('../../application/services/ong');

exports.post = async (request) => {
  const result = await ongService.register(request.body);
  console.log(result)
  return result;
};

exports.get = async (request) => {
  const result = await ongService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await ongService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await ongService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await ongService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await ongService.delete(id);
  return result;
};
