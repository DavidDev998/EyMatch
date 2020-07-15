'use strict';

const sequelize = require("sequelize");

//arquivo de migração para criação da tabela de pessoas no banco 


module.exports = {
  //método up executa para criar;
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('person_phones', 
      { 
        //dados da pessoa
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        person_id:{
          type:Sequelize.INTEGER,
          references: {model: 'person' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
          allowNull:false,
        },
        phone_id:{
          type:Sequelize.INTEGER,
          references: {model: 'phones' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
          allowNull:false,
        },
        created_at:Sequelize.DATE,
        updated_at: Sequelize.DATE,
        excluded_at: Sequelize.DATE,
      });
  },
//método down executa para desfazer as alterações do UP caso algo de errado ou caso seja executado o comando sequelize migrate:undo;
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('person_phones');
  }
};
