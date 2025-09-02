const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const dbFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const chunks = ['This is the list of our students'];
    await countStudents(dbFile);
    res.send(chunks.join('\n'));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(1245);

module.exports = app;
