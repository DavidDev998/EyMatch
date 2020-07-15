const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('person');

const Email = sequelize.define('Email',{
    email:DataTypes.STRING,
    type:DataTypes.INTEGER,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at:DataTypes.DATE
},{
    tableName: 'emails'
});

Email.belongsToMany(Person,{foreignKey:'email_id',through:'person_emails',as:'person'});

module.exports = Email;