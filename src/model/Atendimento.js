const Model = require('./Model')

class Atendimento extends Model {
    constructor(obj,company){
        super("attendance",company);
        this.id = obj.id;
        this.number = obj.number;
        this.client = obj.client;
        this.client_subitem = obj.client_subitem;
        this.product = obj.product; 
        this.etapa = obj.etapa;
        this.border_color = obj.border_color;
        this.status = obj.status;
    }
};

module.exports = Atendimento;