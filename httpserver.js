/* const http = require('http')
const { readFileSync} = require('fs');
// get all filesystem
const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const pageNotFound = readFileSync('./pagenotfound.html');
const homeStyle = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    // console.log(res);
    console.log(req.url);
    console.log(req.method);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }// testing style for file.
    else if (url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }// about page.
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    } // 404 page, resource not found
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(pageNotFound)
        res.end()
    }
})
server.listen(1111) */

const http = require('http')

const createServer = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.end('This is request')
    }
})