const Profession = require('../model/Profession');

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
    }
}