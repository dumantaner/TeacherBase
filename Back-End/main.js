var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const Author = require('./models/author')

var author = require("./services/authorServices")

const url = 'mongodb+srv://renuc:12345@cluster0.zqcfdse.mongodb.net/TeacherBase'

var app = express()

app.use(bodyParser.json())

mongoose.connect(url, (error) => {
    if (!error) {
        console.log('Connectoed to db')
    }
});
app.use('/author', author.router)

app.listen(8000)