const familyService = require('../../application/services/families');

exports.post = async (request) => {
  const result = await familyService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await familyService.findAll(request.body);
  return result;
};

exports.put = async (id, request) => {
  const result = await familyService.update(id, request.body);
  return result;
};
exports.getById = async (id) => {
  const result = await familyService.findById(id);
  return result;
};

exports.patch = async (id, request) => {
  const result = await familyService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await familyService.delete(id);
  return result;
};

exports.getDeleted = async (request) => {
  const result = await familyService.findAllDeletedAt(request.body);
  return result;
};
