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
    const error = new Error('An error ocurred while finding family');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const families = await Families.findAll({
      where: {
        id,
      },
    });
    return families;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding families by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newFamily) => {
  try {
    const family = await Families.findOne({ id });
    family.set(newFamily);
    family.save();
    return family;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating family');
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
    const error = new Error('An error ocurred while updating family');
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
    const error = new Error('An error ocurred while deleting family');

    error.statusCode = 500;
    throw error;
  }
};
