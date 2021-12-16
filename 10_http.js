//HTTP

const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
    res.write('Welcome to our Home Page!!')
    }
    if(req.url === '/about')
    {
        res.write('Hii This is Ankit....')
    }
    else{
    res.end(`
    <h1>Oops !!!</h1>
    <p>404 Error occur</p>
    <a href ="/">back home</a>
    `)
    }
    res.end()
 
})
server.listen(5000)