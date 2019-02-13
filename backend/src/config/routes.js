const express = require("express")

module.exports = function(server){

    //API routes
    const router = express.Router()
    //Middleware:
    server.use('/api', router)

    //TODO routes
    const todoService = require('../api/todo/todoService')
    // register(método do node): registrando methods declarados no service.
    // digo que '/todo' será a url base, e atribuindo ao rauter. 
    // Ou seja, /api/todo/[methods]
    todoService.register(router, '/todos')
}
