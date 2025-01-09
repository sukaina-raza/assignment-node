// // create http server
import http from 'http';
const writebody= function(req,res){
res.writeHead(200,{"content-type":"text/html"});
res.write('<h1>hello</h1>');
res.end();
};
const server= http.createServer(writebody);
server.listen(4000);
console.log('server is running at localhost:4000')