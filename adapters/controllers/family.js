const familyService = require('../../application/services/families');

exports.post = async (request) => {
  const result = await familyService.register(request.body);
  console.log(result);

  return result;
};

exports.get = async (request) => {
  const result = await familyService.findAll(request.body);
  return result;
};



