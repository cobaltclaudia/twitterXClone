const http = require('http');

const server = http.createServer((req, rs) => {
    console.log("Joined!");

})

const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3001);



// server.listen(3001, "");