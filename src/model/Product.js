const {Model, DataTypes} =  require('sequelize');

class product extends Model{
    static init(connection){
        super.init({
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
            sample        : DataTypes.UUID,
            supplier      : DataTypes.UUID,
        }, {
            sequelize: connection
        })
    }
};

module.exports = product;