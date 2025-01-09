
import http from 'http';
import fs from 'fs';
http.createServer((req, res) => {
    fs.readFile('conact.html', (err, data) => {
        if (err) {
          fs.readFile('40.html', function(err,dataNotFound) {
            if (err){
              res.writeHead(404, { "Content-Type": "text/html" });
            res.end("Error in file");
            return;

          }
          res.writeHead(404,{"content-Type":"text/html"})
            res.end(dataNotFound)
  });
          return;

    };
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data)

        });
})
.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
