const {Model, DataTypes} =  require('sequelize');

class juridical_person extends Model{
    static init(connection){
        super.init({
            razao_social: DataTypes.STRING,
            nome_fantasia:DataTypes.STRING,
            data_abertura: DataTypes.DATE,
            cnpj: DataTypes.STRING,
            inscricao_municipal: DataTypes.STRING,
            inscricao_estadual: DataTypes.STRING,
            lucro_ano:DataTypes.REAL,
            patrimonio: DataTypes.REAL,
            faturamento_presumido: DataTypes.REAL,
            excluded_at: DataTypes.DATE,
        }, {
            sequelize: connection
        })
    }
};

module.exports = juridical_person;