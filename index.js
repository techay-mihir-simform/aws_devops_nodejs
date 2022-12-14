var express = require('express')


var app = express()

app.set('port', (process.env.PORT))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello Worldddddddddd!')
})

app.get('/env', function(request, response) {
  response.send(`ENV is : ${process.env.ENV}`)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
