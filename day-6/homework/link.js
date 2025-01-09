//-------link html file in index.js-----------
import http from 'http';
import fs from 'fs';

// Create the server
http.createServer((req, res) => {
    fs.readFile('contact.html', (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
})
.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});