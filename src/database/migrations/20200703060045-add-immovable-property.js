'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('immovable_property', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:Sequelize.STRING,
      value:Sequelize.REAL,
      note:Sequelize.STRING,
      score:Sequelize.REAL,
      fk_person:{
        type:Sequelize.INTEGER,
        references: {model: 'person' ,key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      created_at:Sequelize.DATE,
      updated_at: Sequelize.DATE,
      excluded_at: Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('immovable_property');
  }
};
