const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log('this is callback from req');
    res.send('Home Page from ExpressJs')
})
app.get('/about', (req, res) => {
    res.send('About page from ExpressJs')
})
app.get('/contact', (req, res) => {
    res.send('Contact page from ExpressJs')
})
app.all('*', (req, res) => {
    res.status(404).send('Page is Not Found')
})
app.listen(1111, () => {
    console.log('this sever is lisening :: 1111');
})