const fs = require('fs');

const md = `
#This is a new file

Your know that you are retarded, right?}
You can write a file with fs.writeFile


*fs.readdir
*fs.readFile
*fs.writeFile

`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log('File Saved');
});