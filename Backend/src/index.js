const express = require('express');//npm install express --save
const cors = require('cors')//npm install cors
const routes = require("./routes")

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação noback-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)
 * Router params: Parâmetros ultilizados para identificar recursos
 * Request Body:  Corpo da requisição, ultilizado para criar ou alterar recursos
 */
