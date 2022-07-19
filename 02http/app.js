//Importar o modulo HTTP
var http = require('http')

//Criar o servidor
http.createServer(
    function(req, res){
        res.write("<h1>aprendendo Node Js No Youtube coroio<h1>")
        res.end()
    }
).listen(8080)

// USAR O NODEMON PARA ATUALIZAR O SERVIDOR ASSIM QUE MODIFICAR
// npm install -g nodemon
// <startar para "nodemon app.js"