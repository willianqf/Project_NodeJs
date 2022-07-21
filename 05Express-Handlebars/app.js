var exp = require('express')
var exphbs = require('express-handlebars')

var app = exp()


app.engine('handlebars', exphbs.engine({defaultLayout : 'principal'}))
app.set('view engine',"handlebars")
app.set('views','views')

app.get('/handlebars', (req, res) => {
	res.render('inicio')
})

app.get('/handlebars/sobre', (req, res) => {
	res.render('sobre')
})

app.listen(1515)