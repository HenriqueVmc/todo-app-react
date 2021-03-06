const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
//Habilitando Middleware:
const allowCors = require('./cors')

// ---  MIDDLEWARES: SEMPRE CHAMADOS EM REQUISIÇÕES ---
// responsável por tratar as requisições com envio de formulario.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(allowCors)

// Registrando a porta declarada
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

//exportando server para uso em routes
module.exports = server