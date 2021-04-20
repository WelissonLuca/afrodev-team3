const Drug = require('../model/drug');

exports.register = async (drug) => {
  try {
    const newDrug = await Drug.create(drug);
    return newDrug;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while register drug");
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
    const error = new Error("An error ocurred while finding drugs");
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const drug = await Drug.findByPk(id);
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while finding drug by id");
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newDrug) => {
  try {
    return await Drug.update(newDrug, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while updating drug");
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newDrug) => {
  try {
    const drug = await Drug.findOne({ id });
    drug.set(newDrug);
    drug.save();
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while updating drug");
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const drug = await Drug.destroy({
      where: {
        id,
      },
    });
    return drug;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while deleting drug");
    error.statusCode = 500;
    throw error;
  }
};