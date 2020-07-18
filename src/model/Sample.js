const {Model, DataTypes} =  require('sequelize');

class sample extends Model{
    static init(connection){
        super.init({
            name          : DataTypes.STRING,
            opening_hours : DataTypes.DATE,
            reserved      : DataTypes.BOOLEAN,
            launch        : DataTypes.DATE,
            phone         : DataTypes.STRING,
            address       : DataTypes.UUID,
        }, {
            sequelize: connection
        })
    }
};

module.exports = sample;