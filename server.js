const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'))

	function greet(){
	var hilsen =["heisann", "Ha det bra", "Hola", "Hello","Buenas Dias" ]
	var tilfeldig = hilsen[Math.floor(Math.random()*hilsen.length)];
	return tilfeldig;
	}

app.get('/tilfeldig/:id', function (req, res) {
  res.send(greet() + " " + req.params.id);
})


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 8080!')
})