const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
* Rota / Recurso
*/

/* 
* Metodos HTTP:
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informaçao no back-end
*/

/* 
* Tipos de parâmetros:
*
* Query params: Paramêtros nomeados na rota após o "?"(filtros,paginação)
* Route Params: Parâmetros utilizados para identificar recurssos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/* 
* SQL : MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSql: MongoDB, CouchDB, etc
*/

/* 
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/