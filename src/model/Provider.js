const Model = require('./Model')

class Provider extends Model {
    constructor(obj,company){
        super("provider",company);
        this.id = obj.id;
        this.number = obj.number;
        this.name = obj.name;
        this.description = obj.description;  
    }
    
};

module.exports = Provider;