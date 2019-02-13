const restful = require("node-restful")

// restful cria uma 'casca' com pelo mongoose, nos dando uma api completa
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)

