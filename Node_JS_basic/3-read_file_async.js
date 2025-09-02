const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1).map(line => line.split(','));

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      for (const [first, , , field] of students) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(first);
      }

      for (const field in fields) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
