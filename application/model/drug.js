const {DataTypes} = require('sequelize')


const Model = require('./baseModel')

class Drug extends Model {
  static init(sequelize) {
    super.init({
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    type: DataTypes.STRING
    },
    {
      sequelize,
      underscored:true,
      tableName: 'drugs'
    }
    )
  }
}

module.exports = Drug