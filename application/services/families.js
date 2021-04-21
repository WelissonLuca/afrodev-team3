const Family = require('../model/families');

exports.post = async (request) => {
  const result = await familyService.register(request.body);
  console.log(result);
  return result;
};

exports.findAll = async (family) => {
  try {
    const families = await Family.findAll({
      where: family,
    });
    return families;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding ongs');
    error.statusCode = 500;
    throw error;
  }
};