const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person')


const Profession = sequelize.define('Profession', {
    name:DataTypes.STRING,
    value:DataTypes.REAL,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at: DataTypes.DATE,
  }, {
    // Other model options go here
    tableName: 'profession'
  });

Profession.hasOne(Person,{ foreignKey:'fk_profession', through:'person', as: 'persons' })

module.exports = Profession;