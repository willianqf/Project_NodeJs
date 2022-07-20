// Express
var exp = require('express')

// Body Parse
var body = require('body-parser')

//Chamando APP
var app = exp()

// Configurar o Body Parser
app.use(body.json())
app.use(body.urlencoded({extended: false})) // Trabalhar com o método POST

// Rotas
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/formulario.html')
})

app.post('/receber', (req, res) =>{
    res.write(req.body.campoIdade)
    res.end()
})

/// Servidor

app.listen(1515)