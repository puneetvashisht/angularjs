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


var employees =[{
  "id": 1,
  "first_name": "Karen",
  "last_name": "Henry",
  "email": "khenry0@blogs.com",
  "gender": "Female",
  "ip_address": "118.251.10.203"
}, {
  "id": 2,
  "first_name": "Robin",
  "last_name": "Gilbert",
  "email": "rgilbert1@hud.gov",
  "gender": "Female",
  "ip_address": "105.38.68.238"
}, {
  "id": 3,
  "first_name": "Sandra",
  "last_name": "Williams",
  "email": "swilliams2@constantcontact.com",
  "gender": "Female",
  "ip_address": "87.129.25.94"
}]
app.get('/employees', function (req, res) {
  res.json(employees)
})

app.post('/authenticate', function (req, res) {
    console.log(req.body)
    if(req.body.name === req.body.pwd){
        res.json({success: true})
    }
   res.json({success: false})
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})