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
      created_at    : Sequelize.DATE,
      updated_at    : Sequelize.DATE,
      excluded_at   : Sequelize.DATE,
      product_id :
      {
        type : Sequelize.INTEGER,
        references : {model: 'product', key: 'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      },
      address_id :
      {
        type : Sequelize.INTEGER,
        references : {model: 'address', key: 'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sample');
  }
};
