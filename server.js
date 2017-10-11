const express = require('express')
const app = express()

app.use(express.static('public'))

	function greet(){
	var hilsen =["heisann", "Ha det bra", "Hola", "Hello","Buenas Dias" ]
	var tilfeldig = hilsen[Math.floor(Math.random()*hilsen.length)];
	return tilfeldig;
	}

app.get('/tilfeldig/:id', function (req, res) {
  res.send(greet() + " " + req.params.id);
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})