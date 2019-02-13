const Todo = require('./todo')

// O que será habilitado em minha API pelo node-restful
Todo.methods(['get', 'post', 'put', 'delete'])

// Aplicando validações ao atualizar registros
// new: para retornar o registro atualizado
// runValidators: aplicar validações do Schema
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo