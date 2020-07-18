const {Model, DataTypes} =  require('sequelize');

class address extends Model{
    static init(connection){
        super.init({
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
        }, {
            sequelize: connection
        })
    }
};

module.exports = address;