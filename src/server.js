//import das dependencias
const express = require('express');
const Routes = require('./routes');
//importa a database para o server
require('./database')
//chama o construtor do express para instanciar um obj do express
const app = express();
app.use(express.json());
//importa as rotas para dentro do obj express
app.use(Routes);
app.listen(3333);