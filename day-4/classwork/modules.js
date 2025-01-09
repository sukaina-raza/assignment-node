// console.log("codegirls")
var http = require('http');
http.createServer(function (req, res) {
    console.log("port listen on 3000")
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hellho World!');
  res.end();

}).listen(8080);

console.log('server is running at localhost:8080')