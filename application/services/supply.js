const { Sequelize, Op } = require('sequelize');
const Supply = require('../model/supply');

exports.register = async (supply) => {
  try {
    const newSupply = await Supply.create(supply);
    return newSupply;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while creating supply');
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
    console.error(err);
    const error = new Error('An error occurred while finding supplies');
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
    if (!supplies.length) {
      return {
        statusCode: 404,
        message: `Supplies not found with name like ${name}`,
      };
    }
    return supplies;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding supplies by name');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const supply = await Supply.findByPk(id);
    if (!supply) {
      return { statusCode: 404, message: `Supply not found with id ${id}` };
    }
    return supply;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding supply by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newSupply) => {
  try {
    const supply = await Supply.findByPk(id);
    if (!supply) {
      return { statusCode: 404, message: `Supply not found with id ${id}` };
    }
    await Supply.update(newSupply, { where: { id } });
    return await Supply.findByPk(id);
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating supply');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newSupply) => {
  try {
    const supply = await Supply.findByPk(id);
    if (!supply) {
      return { statusCode: 404, message: `Supply not found with id ${id}` };
    }
    supply.set(newSupply);
    supply.save();
    return supply;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating supply');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const supply = await Supply.findByPk(id);
    if (!supply) {
      return { statusCode: 404, message: `Supply not found with id ${id}` };
    }
    supply.destroy();
    supply.save();
    return supply;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while deleting supply');
    error.statusCode = 500;
    throw error;
  }
};
