const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person')


const Civil_status = sequelize.define('Civil_status', {
    name:DataTypes.STRING,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at: DataTypes.DATE,
  }, {
    // Other model options go here
    tableName: 'civil_status'
  });

Civil_status.hasOne(Person,{ foreignKey:'fk_civil_status', through:'person', as: 'persons' })

module.exports = Civil_status;