const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'ongs',
      },
    );
  }
}

module.exports = Ong;
