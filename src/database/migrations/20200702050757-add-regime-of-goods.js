'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('regime_of_goods', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:Sequelize.STRING,
      note:Sequelize.STRING,
      score:Sequelize.REAL,
      created_at:Sequelize.DATE,
      updated_at: Sequelize.DATE,
      excluded_at: Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('regime_of_goods');
  }
};
