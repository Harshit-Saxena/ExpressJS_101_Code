const http = require('http')
const server = http.createServer((req, res) => {
    // res.write('Welcome to my first node web server')
    if(req.url === '/'){
        res.end('this is the root folder')
    }if(req.url === '/about') {
        res.end('this is the about page of the webPage')
    }
    res.end(`<h1> Opps! we're working on this page coming soon</h1>
 <a href="/">HOME</a> `)
})
server.listen(1111)