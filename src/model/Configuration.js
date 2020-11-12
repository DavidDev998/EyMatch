const Model = require('./Model')

class Configuration extends Model {
    constructor(obj,company){
        super("configurations",company);
        this.id = obj.id;
        this.name = obj.name;
        this.json = obj.json;  
    }
    
};

module.exports = Configuration;