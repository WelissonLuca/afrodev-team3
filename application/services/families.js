const Families = require('../model/families');
const Supply = require('../model/supply');
const supplyService = require('./supply');

exports.register = async (family) => {
  try {
    const newFamily = await Families.create(family);
    family.supplies.forEach(async (item, index) => {
      newFamily.addSupply(await supplyService.findAll({ id: item }));
    })
    return newFamily;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while creating family');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (family) => {
  try {
    const families = await Families.findAll({
      where: family,
      include: Supply
    });
    return families;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding family');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const families = await Families.findByPk(id);
    if (!families) return { statusCode: 404, message: `Family not found with id ${id}` };
    return families;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding families by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newFamily) => {
  try {
    const family = await Families.findByPk(id);
    if (!family) return { statusCode: 404, message: `Family not found with id ${id}` };

    family.set(newFamily);
    family.save();
    return family;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating family');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newFamily) => {
  try {
    const family = await Families.findByPk(id);
    if (!family) return { statusCode: 404, message: `Family not found with id ${id}` };
    await Families.update(newFamily, { where: { id } });
    return await Families.findByPk(id);
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating family');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const family = await Families.findByPk(id);
    if (!family) return { statusCode: 404, message: `Family not found with id ${id}` };
    family.destroy();
    family.save();

    return family;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while deleting family');

    error.statusCode = 500;
    throw error;
  }
};
