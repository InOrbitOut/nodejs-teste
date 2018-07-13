const http = require('http');
const port = process.env.PORT || 8080;

http.createServer(function(req,res) {
    var array = req.url.split("/");
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.url
           + "\n" + array);
}).listen(port);
