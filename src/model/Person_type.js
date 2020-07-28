const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('person');

const Person_type = sequelize.define('Person_type',{
    name:DataTypes.STRING,
    note:DataTypes.STRING,
    excluded_at:DataTypes.DATE
},{
    tableName: 'person_type'
});

Person_type.hasOne(Person,{foreignKey:'person_type_id',through:'person',as:'persons'});

module.exports = Person_type;