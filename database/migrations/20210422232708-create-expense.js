module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('expenses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DECIMAL(10, 3),
      allowNull: false,
      defaultValue: 0,
    },
    category: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM('purchase', 'bill', 'salary', 'transport', 'maintenance'),
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM('released', 'approved', 'rejected'),
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: async (queryInterface) => {
    await queryInterface.dropTable('expenses');
  },
};
