const PersonConfig = require('../../model/Person_fields_config');
const Person = require('../../model/Person');
const { index } = require('./PersonTypeController');

module.exports =  {
    async updateFields(req,res){
        var personFields = Object.keys(Person.tableAttributes);
        personFields.forEach(async field => {
            await PersonConfig.findOrCreate({where:{field_name:field},defaults:{
                field_name:field,
                on_off:false,
                required:false
            }});
        });
    },

    async index(req,res)
    {
        
    }
};