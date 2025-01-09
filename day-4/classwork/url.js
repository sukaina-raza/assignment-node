//create url and then parse

const http = require('http');
const url = require('url');
const addr = "http://localhost:8080/default.html? year=2088&month=feb"
 const q = url.parse(addr , true);
console.log(q.query)