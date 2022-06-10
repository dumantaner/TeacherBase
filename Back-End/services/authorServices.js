var Author = require('../models/author')
var express = require('express')
var router = express.Router()

router.post('/add', (request, response) => {

    var authorData = request.body
    var author = new Author(authorData)
    author.save((err, response) => {
        if (err) {
            console.log(err)
            return response.sendStatus(500).send({ message: err })
        }

        return response.status(201)

    })
})

router.get('/list', async (request, response) => {
    var authors = await Author.find({}, '-__v');
    response.send(authors)
})


var author = {router}
module.exports = author