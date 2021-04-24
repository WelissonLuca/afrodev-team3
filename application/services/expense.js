const { Sequelize, Op } = require('sequelize');
const Expense = require('../model/expense');

exports.register = async (expense) => {
  try {
    const newExpense = await Expense.create(expense);
    return newExpense;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while creating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (expense) => {
  try {
    const expenses = await Expense.findAll({ where: expense });
    return expenses;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding expenses');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return { statusCode: 404, message: `Expense not found with id ${id}` };
    }
    return expense;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding expense by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.findByCategory = async (category) => {
  try {
    const expenses = await Expense.findAll({
      where: Sequelize.where(Sequelize.fn('lower', Sequelize.col('category')), {
        [Op.like]: Sequelize.fn('lower', `%${category}%`),
      }),
    });
    if (!expenses.length) {
      return {
        statusCode: 404,
        message: `Expenses not found in category like ${category}`,
      };
    }
    return expenses;
  } catch (err) {
    console.error(err);
    const error = new Error(
      'An error occurred while finding expenses by category',
    );
    error.statusCode = 500;
    throw error;
  }
};

exports.findByType = async (type) => {
  try {
    const expenses = await Expense.findAll({
      where: Sequelize.where(
        Sequelize.fn('lower', Sequelize.col('type')),
        Sequelize.fn('lower', type),
      ),
    });
    if (!expenses.length) {
      return {
        statusCode: 404,
        message: `Expenses not found with type ${type}`,
      };
    }
    return expenses;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while finding expenses by type');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newExpense) => {
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return { statusCode: 404, message: `Expense not found with id ${id}` };
    }
    await Expense.update(newExpense, { where: { id } });
    return await Expense.findByPk(id);
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newExpense) => {
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return { statusCode: 404, message: `Expense not found with id ${id}` };
    }
    expense.set(newExpense);
    expense.save();
    return expense;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while updating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return { statusCode: 404, message: `Expense not found with id ${id}` };
    }
    expense.destroy();
    expense.save().then(async () => {
      const idMax = await Expense.max('id');
      const sql = `ALTER TABLE expenses AUTO_INCREMENT=${idMax}`;
      await Expense.sequelize.query(sql);
    });
    return expense;
  } catch (err) {
    console.error(err);
    const error = new Error('An error occurred while deleting expense');
    error.statusCode = 500;
    throw error;
  }
};
