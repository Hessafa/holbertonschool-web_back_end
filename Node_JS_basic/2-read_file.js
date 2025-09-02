const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
