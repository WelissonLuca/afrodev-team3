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

<<<<<<< HEAD
exports.update = async (id, newFamily) => {
  try {
    const family = await Families.findOne({ id });
    family.set(newFamily);
    family.save();
    return family;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating family');
=======
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
>>>>>>> 8b48ae874a9054e8e9d33b8c8d7ededa038c2d4d
    error.statusCode = 500;
    throw error;
  }
};
<<<<<<< HEAD
=======



>>>>>>> 8b48ae874a9054e8e9d33b8c8d7ededa038c2d4d
