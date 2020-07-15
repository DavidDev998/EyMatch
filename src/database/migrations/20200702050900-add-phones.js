'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phones', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_code:Sequelize.STRING,
      ddd:Sequelize.INTEGER,
      number:Sequelize.STRING,
      type:Sequelize.STRING,
      note:Sequelize.STRING,
      score:Sequelize.REAL,
      created_at:Sequelize.DATE,
      updated_at: Sequelize.DATE,
      excluded_at: Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phones');
  }
};
