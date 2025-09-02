const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const args = process.argv;
  const dbFile = args[2];

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(dbFile)
      .then(() => {})
      .catch(err => res.end(err.message));
  }
});

app.listen(1245);

module.exports = app;
