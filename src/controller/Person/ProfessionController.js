const Profession = require('../../model/Profession');

module.exports = {
    async create(req,res)
    {
        try
        {
            let newProfession = new Profession();
            const profession = req.body;
            if(profession !=null && profession.name != null)
            {
                newProfession = await Profession.create(profession);
            }

            return res.json({Profession:newProfession});
        }
        catch(e)
        {
            return res.json({Message:"Erro: " + e})
        }
    },

    async index(req,res){
        try
        {
            const professionList = await Profession.findAll();
            res.json(professionList);
        }
        catch(e)
        {
            res.status(404);
            return res.json({Message:"Erro: " + e});
        }
    },

    async update(req,res){
        try{
            const profession = req.body;
            
            //verifica se existe
            const toUpdate = await Profession.findByPk(profession.id);
            if(toUpdate)
            {
                (await toUpdate).update(profession);
                res.json({Message:"Success"})
            }
            res.status(404)
            res.json({Message:"Profession not found"})
            
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
            const toExclude = await Profession.findByPk(pk);

            await toExclude.destroy();

            return res.json({Message:"Success"});
        }catch(e)
        {   
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
    }
}