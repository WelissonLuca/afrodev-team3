const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        value: {
          type: DataTypes.DECIMAL(10, 3),
          allowNull: false,
          defaultValue: 0,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM('purchase', 'bill', 'salary', 'transport', 'maintenance'),
          allowNull: false,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('released', 'approved', 'rejected'),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'expenses',
      },
    );
  }
}

module.exports = Expense;
