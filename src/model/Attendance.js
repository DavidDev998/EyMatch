const Model = require('./Model')

class Atendimento extends Model {
    constructor(obj,company){
        const relationships = ["client", "product","payment"]
        super("attendance",company,relationships);
        this.id = obj.id;
        this.number = obj.number;
        this.client = obj.client;
        this.subitem = obj.subitem;
        this.product = obj.product; 
        this.payment = obj.payment;
        this.etapa = obj.etapa;
        this.border_color = obj.border_color;
        this.status = obj.status;
    }
};

module.exports = Atendimento;