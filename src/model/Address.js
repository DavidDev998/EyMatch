const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person');
const Product = sequelize.define('Product');
const Sample = sequelize.define('Sample');
const JuridicalPerson = sequelize.define('JuridicalPerson');

const Address = sequelize.define('Address',
{
    recipient        : DataTypes.STRING,
    public_place     : DataTypes.STRING,
    number           : DataTypes.INTEGER,
    block            : DataTypes.STRING,
    lot              : DataTypes.STRING,
    neighborhood     : DataTypes.STRING,
    city             : DataTypes.STRING,
    state            : DataTypes.STRING,
    zip_code         : DataTypes.INTEGER,
    wing             : DataTypes.STRING,
    attachment       : DataTypes.STRING,
    auditorium       : DataTypes.STRING,
    pad              : DataTypes.STRING,
    room             : DataTypes.STRING,
    house            : DataTypes.INTEGER,
    apartment_number : DataTypes.INTEGER,
}, 
{
    tableName : 'address'
});

Address.belongsToMany(Person, { foreignKey:'address_id', through:'person_addresses', as: 'persons' })
Address.belongsToMany(Product, { foreignKey: 'address_id', through: 'product', as: 'products' })
Address.belongsToMany(Sample, { foreignKey: 'address_id', through: 'sample', as: 'samples' })
//Address.belongsToMany(JuridicalPerson, { foreignKey: 'address_id', through: 'juridical_person', as: 'juridical_persons' })

module.exports = Address;