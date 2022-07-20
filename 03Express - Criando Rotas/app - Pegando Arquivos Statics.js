// Importa express
var exp = require('express')

// APP
var app = exp()

//ESPECIFICAR LOCAL DO CSS E IMAGEM 
app.use(exp.static(__dirname + '/Publico'))

/////////////////////////////////////////////////////
////////////////////////////////////////
app.get('/pagina', (req, res) =>{
    res.sendFile(__dirname + '/Pagina.html') //__dirname => Pega o diretorio atual
})

//Servidor

app.listen(8050);