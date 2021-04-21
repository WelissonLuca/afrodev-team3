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

exports.patch = async (id, newFamily) => {
  try {
    return await Families.update(newFamily, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating ong');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const family = await Families.destroy({
      where: {
        id,
      },
    });
    return family;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting ong');
    error.statusCode = 500;
    throw error;
  }
};



