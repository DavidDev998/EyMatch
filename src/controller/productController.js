const Product = require('../model/Product');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const product = req.body;
        let newProduct = new Product(product,company)
        var retorno = await Product.create(newProduct);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const product = new Product(new Object(),company);
        var retorno = await Product.read(product);
        res.json(retorno);
    },
    async update(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const updateProduct = req.body;
        updateProduct.id = id;
        
        const updated = new Attendance(updateProduct,company)

        var retorno = await Product.update(updated);
        return retorno
    },
    async delete(req,res){
        const company = req.params.company;
        const toDelete = new Product(req.params,company);
        
        
        var retorno = await Product.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const product = new Product(new Object(),company);
        product.id = id;
        var retorno = await Product.readById(product);
        res.json(retorno.rows[0]);
    }
}