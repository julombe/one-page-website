const express = require('express')
const routes = express.Router()


// create route
routes.get("/", function(req, res) {
    return res.render("index")
})

module.exports = routes