const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Drug extends Model {
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
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        category: {
          type: DataTypes.ENUM(
            'alopatico',
            'fitoterapico',
            'homeopatico',
            'generico',
            'referencia',
            'manipulado',
            'outros',
          ),
          allowNull: false,
        },
        description: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'drugs',
      },
    );
  }
}

module.exports = Drug;
