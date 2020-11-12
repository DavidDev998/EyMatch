const Model = require('./Model')

class Payment extends Model {
    constructor(obj,company){
        super("payment",company);
        this.id = obj.id;
        this.number = obj.number;
        this.name = obj.name;
        this.description = obj.description;  
    }
    
};

module.exports = Payment;