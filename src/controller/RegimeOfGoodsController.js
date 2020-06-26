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
    }
}