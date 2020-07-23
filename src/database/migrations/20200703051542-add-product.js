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
      score         : Sequelize.FLOAT,
      description   : Sequelize.TEXT,
      product_state : Sequelize.STRING,
      composition   : Sequelize.UUID,
      launch        : Sequelize.DATE,
      consumable_by : Sequelize.STRING,
      slogan        : Sequelize.TEXT,
      created_at    : Sequelize.DATE,
      updated_at    : Sequelize.DATE,
      excluded_at   : Sequelize.DATE,
      additional_id : 
      {
        type : Sequelize.UUID,
        references : {model: 'products', key: 'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE', 
      },
      category_id : 
      {
        type : Sequelize.UUID,
        references : {model: 'products', key: 'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE', 
      },
      supplier_id : 
      {
        type : Sequelize.UUID,
        references : {model: 'supplier', key: 'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE', 
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};