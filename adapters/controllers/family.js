const familyService = require('../../application/services/families');

exports.post = async (request) => {
  const result = await familyService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await familyService.findAll(request.body);
  return result;
};

<<<<<<< HEAD
exports.put = async (id, request) => {
  const result = await familyService.update(id, request.body);
  return result;
};
=======
exports.patch = async (id, request) => {
  const result = await familyService.patch(id, request.body);
  return result;
};


exports.delete = async (id) => {
  const result = await familyService.delete(id);
  return result;
};
>>>>>>> 8b48ae874a9054e8e9d33b8c8d7ededa038c2d4d
