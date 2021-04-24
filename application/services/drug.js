const Drug = require('../model/drug');

exports.register = async (drug) => {
  try {
    const newDrug = await Drug.create(drug);
    return newDrug;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while register drug');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (drug) => {
  try {
    const drugs = await Drug.findAll({
      where: drug,
    });
    return drugs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding drugs');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const drug = await Drug.findByPk(id);
    if (!drug) return { statusCode: 404, message: `Drug not found whit id ${id}` };
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding drug by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newDrug) => {
  try {
    const drug = await Drug.findByPk(id);
    if (!drug) return { statusCode: 404, message: `Drug not found whit id ${id}` };
    await Drug.update(newDrug, { where: { id } });
    return await Drug.findByPk(id);
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating drug');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newDrug) => {
  try {
    const drug = await Drug.findByPk(id);
    if (!drug) return { statusCode: 404, message: `Drug not found whit id ${id}` };
    drug.set(newDrug);
    drug.save();
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating drug');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const drug = await Drug.findByPk(id);
    if (!drug) return { statusCode: 404, message: `Drug not found whit id ${id}` };
    drug.destroy();
    drug.save();
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting drug');
    error.statusCode = 500;
    throw error;
  }
};
