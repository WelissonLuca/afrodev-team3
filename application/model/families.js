const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Families extends Model {
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
        birth_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        civil_status: {
          type: DataTypes.ENUM('Casado', 'Solteiro', 'Divorciado', 'Viuvo'),
          allowNull: false,
        },
        gender: {
          type: DataTypes.ENUM('Masculino', 'Feminino'),
          allowNull: false,
        },
        number_members: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        children: DataTypes.INTEGER,
        per_capita_income: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'families',
      },
    );
  }
}

module.exports = Families;
