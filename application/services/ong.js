const Ong = require('../model/ong');

exports.register = async (ong) => {
  try {
    const newOng = await Ong.create(ong);
    console.log(ong);
    return newOng;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating ong');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (ong) => {
  try {
    const ongs = await Ong.findAll({
      where: ong,
    });
    return ongs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding ongs');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const ongs = await Ong.findAll({
      where: {
        id,
      },
    });
    return ongs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding ong by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newOng) => {
  try {
    return await Ong.update(newOng, {
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

exports.update = async (id, newOng) => {
  try {
    const ong = await Ong.findOne({ id });
    ong.set(newOng);
    ong.save();
    return ong;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating ong');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const ong = await Ong.destroy({
      where: {
        id,
      },
    });
    return ong;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting ong');
    error.statusCode = 500;
    throw error;
  }
};
