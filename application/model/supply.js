const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Supply extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(10, 3),
          allowNull: false,
          defaultValue: 0,
        },
        quantity: {
          type: DataTypes.DECIMAL(10, 3),
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'supplies',
      },
    );
  }
}

module.exports = Supply;
