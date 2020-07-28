const Civil_status = require('../../model/Civil_status');

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
            res.status(400);
            return res.json({Message:"Erro: " + e});
        }
    },

    async index(req,res){
        try
        {
            const listCivilStatus = await Civil_status.findAll();
            res.json(listCivilStatus);
        }
        catch(e)
        {
            res.status(404);
            return res.json({Message:"Erro: " + e});
        }
    },

    async update(req,res){
        try{
            const {civil_status} = req.body;
            //verifica se existe
            const toUpdate = await Civil_status.findByPk(civil_status.id);
            if(toUpdate)
            {
                //atualiza
                (await toUpdate).update(civil_status)
                res.json({Message:"Success"})
            }
            res.status(404)
            res.json({Message:"Civil status not found"})
            
        }
        catch(e)
        {
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
    },

    async delete(req,res){
        try{
            const pk =  parseInt(req.params.pk);
            const toExclude = await Civil_status.findByPk(pk);

            await toExclude.destroy();

            return res.json({Message:"Success"});
        }catch(e)
        {   
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
    }
}