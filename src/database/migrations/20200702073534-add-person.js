'use strict';

const sequelize = require("sequelize");

//arquivo de migração para criação da tabela de pessoas no banco 


module.exports = {
  //método up executa para criar;
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('person', 
      { 
        //dados da pessoa
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        middle_name:Sequelize.STRING,
        salutation: Sequelize.STRING,
        alias:Sequelize.STRING,
        sulfix:Sequelize.STRING,
        title:Sequelize.STRING,
        birth_date:{
          type: Sequelize.DATE,
        },
        cpf:Sequelize.STRING,
        rg:Sequelize.STRING,
        gender:Sequelize.STRING,
        orgao_expedidor:Sequelize.STRING,
        uf:Sequelize.STRING,
        mother_name:Sequelize.STRING,
        role:Sequelize.STRING,
        income:Sequelize.REAL,
        family_income:Sequelize.REAL,
        complement_income: Sequelize.REAL,
        dependents_number:Sequelize.INTEGER,
        patrimony:Sequelize.REAL,
        scholarity:Sequelize.STRING,
        //colunas relacionadas
        fk_profession:{
          type:Sequelize.INTEGER,
          references: {model: 'profession' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        // fk_place_of_birth:{
        //   type:Sequelize.INTEGER,
        //   references: {model: 'cities' ,key:'id'},
        //   onUpdate:'CASCADE',
        //   onDelete:'SET NULL',
        // },
        // fk_nationality:{
        //   type:Sequelize.INTEGER,
        //   references: {model: 'countries' ,key:'id'},
        //   onUpdate:'CASCADE',
        //   onDelete:'SET NULL',
        // },
        // fk_uf:{
        //   type:Sequelize.INTEGER,
        //   references: {model: 'states' ,key:'id'},
        //   onUpdate:'CASCADE',
        //   onDelete:'SET NULL',
        // },
        fk_civil_status:{
          type:Sequelize.INTEGER,
          references: {model: 'civil_status' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        fk_regime_de_bens:{
          type:Sequelize.INTEGER,
          references: {model: 'regime_of_goods' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        fk_phones:{
          type:Sequelize.INTEGER,
          references: {model: 'phones' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        fk_emails:{
          type:Sequelize.INTEGER,
          references: {model: 'emails' ,key:'id'},
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        },
        //medidas
        height:Sequelize.REAL,
        weight:Sequelize.REAL,
        head_measure: Sequelize.REAL,
        neck_measure: Sequelize.REAL,
        wrist_measure: Sequelize.REAL,
        shoulders_measure:Sequelize.REAL,
        shoulder_measure:Sequelize.REAL,
        bust_measure:Sequelize.REAL,
        arm_length:Sequelize.REAL,
        arm_perimeter:Sequelize.REAL,
        waist_measure:Sequelize.REAL,
        hip_measure:Sequelize.REAL,
        smaller_front_measure:Sequelize.REAL,
        smaller_back_measure:Sequelize.REAL,
        back_width_measure:Sequelize.REAL,
        body_measure:Sequelize.REAL,
        skirt_measure:Sequelize.REAL,
        bra_size:Sequelize.STRING,
        low_bust_measure:Sequelize.REAL,
        pants_size:Sequelize.STRING,
        shirt_size:Sequelize.STRING,
        underwear_size:Sequelize.STRING,
        leg_length:Sequelize.REAL,
        thigh_perimeter:Sequelize.REAL,
        finger_size:Sequelize.INTEGER,
        skin_color:Sequelize.STRING,
        eyes_color:Sequelize.STRING,
        hair_color:Sequelize.STRING,
        shoes_number:Sequelize.INTEGER,
        deficiency:Sequelize.BOOLEAN,
        deficiency_type:Sequelize.STRING,
        score:Sequelize.REAL,
        //Date
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
