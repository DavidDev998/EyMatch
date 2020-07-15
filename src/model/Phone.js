const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('person');

const Phone = sequelize.define('Phone',{
    country_code:DataTypes.STRING,
    ddd:DataTypes.INTEGER,
    number:DataTypes.STRING,
    type:DataTypes.STRING,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at:DataTypes.DATE
},{
    tableName: 'phones'
});

Phone.belongsToMany(Person,{foreignKey:'phone_id',through:'person_phones',as:'person'});

module.exports = Phone;