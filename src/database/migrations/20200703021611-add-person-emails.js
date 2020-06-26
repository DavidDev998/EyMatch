'use strict';

const sequelize = require("sequelize");

//arquivo de migração para criação da tabela de pessoas no banco 


module.exports = {
  //método up executa para criar;
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('person_emails', 
      { 
        //dados da pessoa
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        fk_person:{
          type:Sequelize.INTEGER,
          references: {model: 'person' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        fk_emails:{
          type:Sequelize.INTEGER,
          references: {model: 'emails' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        created_at:Sequelize.DATE,
        updated_at: Sequelize.DATE,
        excluded_at: Sequelize.DATE,
      });
  },
//método down executa para desfazer as alterações do UP caso algo de errado ou caso seja executado o comando sequelize migrate:undo;
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('person_emails');
  }
};