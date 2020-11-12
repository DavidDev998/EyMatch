const Payment = require('../model/Payment');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const payment = req.body;
        let newPayment = new Payment(payment,company)
        var retorno = await Payment.create(newPayment);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const payment = new Payment(new Object(),company);
        var retorno = await Payment.read(payment);
        res.json(retorno);
    },
    async update(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const updatePayment = req.body;
        updatePayment.id = id;
        
        const updated = new Payment(updatePayment,company)

        var retorno = await Payment.update(updated);
        return retorno
    },
    async delete(req,res){
        const company = req.params.company;
        const toDelete = new Payment(req.params,company);
        
        
        var retorno = await Payment.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const payment = new Payment(new Object(),company);
        payment.id = id;

        var retorno = await Payment.readById(payment);
        res.json(retorno.rows[0]);
    }
}