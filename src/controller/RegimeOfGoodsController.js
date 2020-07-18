const Regime_of_goods = require('../model/Regime_of_goods');

module.exports = {
    async create(req,res)
    {
        try
        {
            let newRegime_of_goods = new Regime_of_goods();
            const {regime_of_goods} = req.body;
            if(regime_of_goods !=null && regime_of_goods.name != null)
            {
                newRegime_of_goods = await Regime_of_goods.create(regime_of_goods);
            }

            return res.json({Regime_of_goods:newRegime_of_goods});
        }
        catch(e)
        {
            return res.json({Message:"Erro: " + e})
        }
    },

    async index(req,res){
        try
        {
            const regimeList = await Regime_of_goods.findAll();
            res.json(regimeList);
        }
        catch(e)
        {
            res.status(404);
            return res.json({Message:"Erro: " + e});
        }
    },

    async update(req,res){
        try{
            const {regime_of_goods} = req.body;
            //verifica se existe
            const toUpdate = await Regime_of_goods.findByPk(regime_of_goods.id);
            if(toUpdate)
            {
                (await toUpdate).update(regime_of_goods)
            }
            res.json({Message:"Success"})
            
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
            const toExclude = await Regime_of_goods.findByPk(pk);

            await toExclude.destroy();

            return res.json({Message:"Success"});
        }catch(e)
        {   
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
    }
}