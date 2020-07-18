const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person');
const Sample = sequelize.define('Sample');
const JuridicalPerson = sequelize.define('JuridicalPerson');
const Address = sequelize.define('Address');

const Product = sequelize.define ('Product',
{
    name          : DataTypes.STRING,
    price         : DataTypes.FLOAT,
    size          : DataTypes.STRING,
    color         : DataTypes.STRING,
    length        : DataTypes.STRING,
    width         : DataTypes.STRING,
    height        : DataTypes.STRING,
    weight        : DataTypes.STRING,
    additional    : DataTypes.UUID,
    score         : DataTypes.FLOAT,
    description   : DataTypes.TEXT,
    category      : DataTypes.UUID,
    product_state : DataTypes.STRING,
    composition   : DataTypes.UUID,
    launch        : DataTypes.DATE,
    address       : DataTypes.UUID,
    consumable_by : DataTypes.STRING,
    slogan        : DataTypes.TEXT,
    supplier      : DataTypes.UUID,
}, 
{
    tableName : 'product'
});

Product.belongsTo(Person, { foreignKey: 'product_id', as: 'persons' })
Product.belongsTo(JuridicalPerson, { foreignKey: 'product_id', as: 'juridical_persons' })
Product.hasOne(Address, { foreignKey: 'product_id',  as: 'addresses' })
Product.hasMany(Sample, { foreignKey: 'product_id', as: 'samples'})

module.exports = product;