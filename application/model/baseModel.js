const { Model } = require('sequelize');

class BaseModel extends Model {
  static init(schema, options) {
    super.init({
      ...schema,
    }, {
      ...options,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  }
}

module.exports = BaseModel;
