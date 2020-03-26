const express = require('express')

const Ongcontroller = require('./controllers/Ongcontroller');//controller ongs
const Incidentcontroller = require('./controllers/Incidentcontroller');//controller icidentes
const Profilecontroller = require('./controllers/Profilecontoller');//controler incidentes unnicos de cada ong
const Sessioncontroller = require('./controllers/Sessioncontroller');//controler de login e sessão de usuarios

const routes = express.Router();

//rotas

routes.post('/sessions', Sessioncontroller.create)//Rota responsavel por fazer a autenticação do usuario

routes.get('/ongs', Ongcontroller.index);//Rota responsavel por listar as ongs
routes.post('/ongs', Ongcontroller.create);//Rota de cadastro de ongs

routes.get('/profile', Profilecontroller.index)//Rota que lista apenas um incidente por vez

routes.post('/incidents', Incidentcontroller.create)//rota que cria os incidentes das ongs
routes.get('/incidents', Incidentcontroller.index)//rota que lista os incidentes das ongs
routes.delete('/incidents/:id', Incidentcontroller.delete)//rota que apaga um incidente


module.exports = routes;


/**
 * o segundo ARGUMENTO APOS O  PONTO É O NOME DADO A FUNÇÃO DO CONTROLER.
 * ex:
 * Ongcontroller.create/create éo nome dado
 */
