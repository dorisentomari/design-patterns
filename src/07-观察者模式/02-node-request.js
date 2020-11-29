const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=> {
  req.on('data', data => {
    console.log('data');
    console.log(data);
  });
  req.on('end', () => {
    console.log('end');
  });
  res.end('hello');
});

server.listen(3000);


