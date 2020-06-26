const {Model, DataTypes} =  require('sequelize');

class person extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            data_nascimento: DataTypes.DATE,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            sexo: DataTypes.STRING,
            orgao_expedidor: DataTypes.STRING,
            cargo:DataTypes.STRING,
            renda:DataTypes.REAL,
            renda_familiar: DataTypes.REAL,
            renda_complementar: DataTypes.REAL,
            numero_dependentes: DataTypes.INTEGER,
            patrimonio: DataTypes.REAL,
            nome_da_mae:DataTypes.STRING,
            excluded_at: DataTypes.DATE,
        }, {
            sequelize: connection
        })
    }
};

module.exports = person;