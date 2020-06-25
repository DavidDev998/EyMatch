'use strict';

const sequelize = require("sequelize");

//arquivo de migração para criação da tabela de pessoas no banco 


module.exports = {
  //método up executa para criar;
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('person', 
      { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        data_nascimento:{
          type: Sequelize.DATE,
        },
        cpf:Sequelize.STRING,
        rg:Sequelize.STRING,
        sexo:Sequelize.STRING,
        orgao_expedidor:Sequelize.STRING,
        cargo:Sequelize.STRING,
        renda:Sequelize.REAL,
        renda_familiar:Sequelize.REAL,
        renda_complementar: Sequelize.REAL,
        numero_dependentes:Sequelize.INTEGER,
        patrimonio:Sequelize.REAL,
        created_at:Sequelize.DATE,
        updated_at: Sequelize.DATE,
        excluded_at: Sequelize.DATE,
      });
  },
//método down executa para desfazer as alterações do UP caso algo de errado ou caso seja executado o comando sequelize migrate:undo;
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('person');
  }
};
