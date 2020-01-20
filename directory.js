const fs = require('fs');


if (fs.existsSync('storage-files')) {
    console.log(true);
    process.exit();
}


fs.mkdir('storage-files/test', err => {
    if (err) {
        throw err;
    }

    console.log('directory created');
});