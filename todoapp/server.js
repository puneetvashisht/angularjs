var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var cors = require('cors');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(cors());


var todos = ['item1', 'item2']
app.get('/todos', function (req, res) {
  res.json(todos)
})

app.post('/todos', function (req, res) {
  console.log(req.body.todo);
  todos.push(req.body.todo)
  res.json(todos)
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})