const fs = require('fs');

// const text = fs.readFileSync('./assets/readMe.md', 'UTF-8');
fs.readFile('./assets/readMe.md', 'UTF-8', (err, text) => {
    if (err) {
        throw err;
    }
    console.log(text);
});