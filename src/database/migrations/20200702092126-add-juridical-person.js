'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('juridical_person', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razao_social:Sequelize.STRING,
      nome_fantasia:Sequelize.STRING,
      data_abertura:Sequelize.DATE,
      cnpj:Sequelize.STRING,
      inscricao_municipal:Sequelize.STRING,
      inscricao_estadual:Sequelize.STRING,
      lucro_ano:Sequelize.REAL,
      patrimonio:Sequelize.REAL,
      faturamento_presumido:Sequelize.REAL,
      created_at:Sequelize.DATE,
      updated_at: Sequelize.DATE,
      excluded_at: Sequelize.DATE,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('juridical_person');
  }
};
