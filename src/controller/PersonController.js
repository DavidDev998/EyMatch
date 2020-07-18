const Person  = require('../model/Person');
const Immovable = require('../model/Immovable_property');
const Movable = require('../model/Movables');
const Profession = require('../model/Profession');
const Civil_status = require('../model/Civil_status');
const Regime_of_goods = require('../model/Regime_of_goods');
const { findByPk, update } = require('../model/Person');
const Phone = require('../model/Phone');
const Email = require('../model/Email');
const Address = require('../model/Address');

module.exports ={
    //cria Person
    async create(req,res){
        try
        {
            const { person } = req.body;
            const { immovable }  = req.body;
            const { movable }  = req.body;
            const { profession }  = req.body;
            const { civil_status } = req.body;
            const { regime_of_goods } = req.body;
            const { phone } = req.body;
            const { email } = req.body;
            const { address } = req.body;
            
            let newPerson = new Person();
            let newImmovable = new Immovable();
            let newMovable = new Movable();
            let newProfession = new Profession();
            let newPhone = new Phone();
            let newEmail = new Email();
            let newAddress = new Address();

            //cria Person
            if(person != null)
            {
                newPerson = await Person.create(person);
            }

            //cria phones
            if(phone != null)
            {
                //para cada telefone
                phone.forEach(async element => {
                    //cria o telefone
                    newPhone = (await Phone.create(element));
                    newPerson.addPhones(newPhone.id)
                });
                
            }

            //cria email
            if(email != null)
            {
                email.forEach(async element => {
                    //cria o telefone
                    newEmail = (await Email.create(element));
                    newPerson.addEmails(newEmail.id);
                });
            }

            //cria endereço
            if(address != null)
            {
                address.forEach(async element => {
                    //cria o telefone
                    newAddress = (await Address.create(element));
                    newPerson.addAddresses(newAddress.id);
                    console.log(newAddress)
                });
            }
            //cria immovable_property
            if(immovable != null)
            {
                newImmovable = await Immovable.create(immovable);
                newImmovable.setPerson(newPerson.id);
            }
            
            // Cria movable
            if(movable !=  null){
                newMovable = await Movable.create(movable);
                newMovable.setPerson(newPerson.id);
            }
            //Vincula a uma profissao
            newProfession = await Profession.findByPk(profession);
            if(newProfession != null)
            {
                newPerson.setProfession(newProfession.id);
            }
            //vincula a stado  civil
            newCivil_status = await Civil_status.findByPk(civil_status);
            if(newCivil_status != null)
            {
                newPerson.setCivil_status(newCivil_status.id);
            }
            //vincula a regime de  bens
            newRegimeOfGoods = await Regime_of_goods.findByPk(regime_of_goods);
            if(newRegimeOfGoods != null)
            {
                newPerson.setRegime_of_goods(newRegimeOfGoods.id);
            }
            return res.json({Person:newPerson});
        }
        catch(e)
        {
            res.status(400)
            return res.json({Message:"Erro: " + e})
        }
        
    },

    async index(req,res){
        try
        {
            const listPerson = await Person.findAll();
            return res.json(listPerson);
        }
        catch(e)
        {
            res.status(404)
            return res.json({Message:"Erro: " + e})
        }
        
    },

    async delete(req,res){
        try{
            const pk =  parseInt(req.params.pk);
            const excludePerson = await Person.findByPk(pk);

            await excludePerson.destroy();

            return res.json({Message:"Pessoa " + excludePerson.name + " excluida"});
        }catch(e)
        {   
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
        
    },

    async update(req,res){
        try{
            const { person } = req.body;
            
            const updatedPerson = await Person.findByPk(person.id);
            if(updatedPerson)
            {
                (await updatedPerson).update(person)
            }
            res.json({Person:updatedPerson})
            
        }
        catch(e)
        {
            res.status(400)
            res.json({Message:"Erro " + e.Message})
        }
    }

}