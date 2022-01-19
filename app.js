const http = require('http')
const server = http.createServer((req, res) => {
    // console.log(res);
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Root Page</h1>')
        res.end()
    } // about page.
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } // 404 page, resource not found
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Invalid page , page not found</h1>')
        res.end()
    }
})
server.listen(1111)