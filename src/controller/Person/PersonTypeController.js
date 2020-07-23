const PersonType = require('../../model/Person_type');


module.exports= {
    async create(req,res)
    {
        const {type} = req.body;

        if(type != null)
        {
            await PersonType.create(type);
        }
    }
}