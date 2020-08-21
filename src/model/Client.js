const Model = require('./Model')

class Client extends Model {
    constructor(obj){
        super("client");
        this.id = obj.id;
        this.name = obj.name;
        this.birth_date = obj.birth_date;
        this.cpf = obj.cpf;
        this.rg = obj.rg;
        this.gender = obj.gender;
        this.orgao_expedidor = obj.orgao_expedidor;
        this.role = obj.role;
        this.income = obj.income;
        this.family_income = obj.family_income;
        this.complement_income = obj.complement_income;
        this.dependents_number = obj.dependents_number;
        this.patrimony = obj.patrimony;    
    }
    
};

module.exports = Client;