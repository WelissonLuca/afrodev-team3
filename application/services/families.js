const Families = require('../model/families');

exports.register = async (family) => {
  try {
    const newFamily = await Families.create(family);
    return newFamily;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating family');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (family) => {
  try {
    const families = await Families.findAll({
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



