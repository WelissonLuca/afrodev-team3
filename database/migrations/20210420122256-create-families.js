module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('families', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birth_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    civil_status: {
      type: Sequelize.ENUM('Casado', 'Solteiro', 'Divorciado', 'Viuvo'),
      allowNull: false,
    },
    gender: {
      type: Sequelize.ENUM('Masculino', 'Feminino'),
      allowNull: false,
    },
    number_members: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    children: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    per_capita_income: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: Sequelize.DATE,
      default: null,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('families'),
};
