const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        data = 'No messages yet';
      }
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body>');
      res.write(`<h1>Messages:</h1><pre>${data}</pre>`);
      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          data = '';
        }
        const updatedData = message + '\n' + data;
        fs.writeFile('message.txt', updatedData, (err) => {
          if (err) {
            console.log(err);
          }
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });
    });
  }
});

server.listen(3000);
