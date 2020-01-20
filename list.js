const fs = require('fs');


console.log('startedReadingfiles');
// const files = fs.readdirSync('./assets');
fs.readdir('./assets', (err, files) => {
    if (err) {
        throw err;
    }
    console.log('complete');
    console.log(files);
});