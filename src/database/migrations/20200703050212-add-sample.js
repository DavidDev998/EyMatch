'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sample', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name          : Sequelize.STRING,
      opening_hours : Sequelize.DATE,
      reserved      : Sequelize.BOOLEAN,
      launch        : Sequelize.DATE,
      phone         : Sequelize.STRING,
      address       : Sequelize.UUID,
      created_at    : Sequelize.DATE,
      updated_at    : Sequelize.DATE,
      excluded_at   : Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sample');
  }
};
