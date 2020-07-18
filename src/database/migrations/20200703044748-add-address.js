'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('address', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipient        : Sequelize.STRING,
      public_place     : Sequelize.STRING,
      number           : Sequelize.INTEGER,
      block            : Sequelize.STRING,
      lot              : Sequelize.STRING,
      neighborhood     : Sequelize.STRING,
      city             : Sequelize.STRING,
      state            : Sequelize.STRING,
      zip_code         : Sequelize.INTEGER,
      wing             : Sequelize.STRING,
      attachment       : Sequelize.STRING,
      auditorium       : Sequelize.STRING,
      pad              : Sequelize.STRING,
      room             : Sequelize.STRING,
      house            : Sequelize.INTEGER,
      apartment_number : Sequelize.INTEGER,
      created_at       : Sequelize.DATE,
      updated_at       : Sequelize.DATE,
      excluded_at      : Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address');
  }
};
