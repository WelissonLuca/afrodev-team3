const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Drug extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.DECIMAL(10, 3),
          allowNull: false,
          defaultValue: 0,
        },
        description: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: "drugs",
      }
    );
  }
};

module.exports = Drug;
