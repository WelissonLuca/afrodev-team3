const familyService = require('../../application/services/ong');


exports.get = async (request) => {
  const result = await familyService.findAll(request.body);
  return result;
};
