const Model = require('./Model')

class Product extends Model {
    constructor(obj,company){
        super("product",company);
        this.id = obj.id;
        this.number = obj.number;
        this.name = obj.name;
        this.value = obj.value;
        this.description = obj.description;  
    }
    
};

module.exports = Product;