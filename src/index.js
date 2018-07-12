const http = require('http');
const port = process.env.PORT || 8080;

http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Hello, World!</h1>');
}).listen(port);
