// Classe para Milddlewares: padrão express (requ, res, next)
// next determina se vamos para o prox. milddleware ou iremos abortar
// Ou respondemos ou continuamos( next(); )
module.exports = function(req, res, next){

    //Resposta ao browser, com as seguintes permissões:
    res.header('Access-Control-Allow-Origin', '*')// Permitir que requisições venham de origem diferentes
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}