const PersonType = require('../../model/Person_type');


module.exports= {
    async create(req,res)
    {
        try
        {
            const type = req.body;

        if(type != null)
        {
            let newPersonType = await PersonType.create(type);
            res.json(newPersonType)
        }
        else
        {
            res.json({Message:"Favor informar o nome do tipo de pessoa"})
        }
        }
        catch(e){
            res.status(400)
            return res.json({Message:"Erro: " + e})
        }
        
    },
    async index(req,res)
    {
        try
        {
            const personTypes = await PersonType.findAll();
            res.json(personTypes);
        }
        catch(e)
        {
            res.status(400)
            return res.json({Message:"Erro: " + e})
        }
    },
    async update(req,res)
    {
        try
        {
            const personType = req.body;
            const toUpdate = await PersonType.findByPk(personType.id);

            if(toUpdate != null)
            {
                //atualiza
                (await toUpdate).update(personType);
                res.json({Message:"Success"})
            }
            res.status(404)
            return res.json({Message:"Person Type not found"})
        }
        catch(e)
        {
            res.status(400)
            return res.json({Message:"Erro: " + e})
        }
    },
    async delete(req,res)
    {
        try
        {
            const pk =  parseInt(req.params.pk);
            const toDelete = await PersonType.findByPk(pk);

            if(toDelete != null)
            {
                //delete
                await toDelete.destroy();
                res.json({Message:"Success"})
            }
            res.status(404)
            return res.json({Message:"Person Type not found"})
        }
        catch(e)
        {
            res.status(400)
            return res.json({Message:"Erro: " + e})
        }
    }
}