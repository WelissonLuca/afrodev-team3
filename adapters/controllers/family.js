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
