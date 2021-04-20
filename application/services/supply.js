const { Sequelize, Op } = require('sequelize');
const Supply = require('../model/supply');

exports.register = async (supply) => {
  try {
    const newSupply = await Supply.create(supply);
    return newSupply;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating supply');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (supply) => {
  try {
    const supplies = await Supply.findAll({
      where: supply,
    });
    return supplies;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding supplies');
    error.statusCode = 500;
    throw error;
  }
};

exports.findByName = async (name) => {
  try {
    const supplies = await Supply.findAll({
      where: Sequelize.where(Sequelize.fn('lower', Sequelize.col('name')), {
        [Op.like]: Sequelize.fn('lower', `%${name}%`),
      }),
    });
    return supplies;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding supplies by name');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const supply = await Supply.findByPk(id);
    return supply;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding supply by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newSupply) => {
  try {
    return await Supply.update(newSupply, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating supply');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newSupply) => {
  try {
    const supply = await Supply.findOne({ id });
    supply.set(newSupply);
    supply.save();
    return supply;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating supply');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const supply = await Supply.destroy({
      where: {
        id,
      },
    });
    return supply;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting supply');
    error.statusCode = 500;
    throw error;
  }
};
