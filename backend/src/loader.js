const server = require("./config/server")
require("./config/database")

// passando server como parâmetro
require("./config/routes")(server)