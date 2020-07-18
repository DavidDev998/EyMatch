'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name          : Sequelize.STRING,
      price         : Sequelize.FLOAT,
      size          : Sequelize.STRING,
      color         : Sequelize.STRING,
      length        : Sequelize.STRING,
      width         : Sequelize.STRING,
      height        : Sequelize.STRING,
      weight        : Sequelize.STRING,
      additional    : Sequelize.UUID,
      score         : Sequelize.FLOAT,
      description   : Sequelize.TEXT,
      category      : Sequelize.UUID,
      product_state : Sequelize.STRING,
      composition   : Sequelize.UUID,
      launch        : Sequelize.DATE,
      address       : Sequelize.UUID,
      consumable_by : Sequelize.STRING,
      slogan        : Sequelize.TEXT,
      sample        : Sequelize.UUID,
      supplier      : Sequelize.UUID,
      created_at    : Sequelize.DATE,
      updated_at    : Sequelize.DATE,
      excluded_at   : Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};