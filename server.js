const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html>
<head><title>Hero Subline Test</title></head>
<body>
<h1>Welcome</h1>
<p id="subline" style="width: 250px; font-family: monospace; font-size: 18px; border: 1px solid red;">
  <span id="text">Empowering faith, building community, transforming lives.</span><span id="cursor" style="display:inline-block; width: 8px; background: black;">|</span>
</p>
</body>
</html>`);
});
server.listen(5199, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:5199/');
});
