const db_config = require('../database/config')

module.exports = {
    async companyExists(req,res){
        const empresa = req.params.empresa;
        if(empresa){
            const db = await db_config.DBconnect("eymatch");
            const DbEmpresa = await (await db.query(`SELECT * FROM empresa WHERE url='${empresa}'`));
            if(DbEmpresa.rows[0]){
                res.json({exists:true,companyName:DbEmpresa.rows[0].name})
            }else{
                res.json({exists:false})
            }
        }
    },

    async authenticate(req,res){
        const user = req.body;
        const empresa = req.params.empresa;
        
        let userReturn = new Object();
        userReturn.athenticated = false;

        if(user){
            const db = await db_config.DBconnect(empresa);
            const userAuthenticated = await (await db.query(`SELECT * FROM users WHERE login='${user.login}'`));
            if(userAuthenticated.rows[0]){
                if(userAuthenticated.rows[0].password == user.password){
                    userReturn.login = userAuthenticated.rows[0].login;
                    userReturn.name = userAuthenticated.rows[0].name;
                    userReturn.authenticated = true;
                    userReturn.message = "Usuário autenticado com sucesso";
                }
                else{
                    userReturn.message = "Senha incorreta"
                }
            }else{
                userReturn.message = "Usuário inválido"
            }
            res.json(userReturn);
        }else{
            res.json({teste:"foda-se"});
        }
        
    }
}