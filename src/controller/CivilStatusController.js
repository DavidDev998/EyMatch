const Civil_status = require('../model/Civil_status');

module.exports =  {
    
    async create(req,res)
    {
        try
        {
            let newCivil_status = new Civil_status();
            
            const {civil_status} = req.body;
            if(civil_status !=null && civil_status.name != null)
            {
                newCivil_status = await Civil_status.create(civil_status);
            }

            return res.json({Civil_status:newCivil_status});
        }
        catch(e)
        {
            return res.json({Message:"Erro: " + e})
        }
    }
}