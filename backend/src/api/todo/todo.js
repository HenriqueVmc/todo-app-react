const restful = require("node-restful")

// restful cria uma 'casca' com pelo mongoose, nos dando uma api completa
const mongoose = restful.mongoose

const todoSchema = new mongoose.todoSchema({

    description: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)

