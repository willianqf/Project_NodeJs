// Importar o express
var exp = require('express')

// Criando a variavel para ter acesso as funcionalidades do projeto
var app = exp()

// Criar Rota
app.get('/', (req, res) => {
    res.write("Utilizando o Express para retornar")
    res.end()
})

// Servidor
app.listen('8080')