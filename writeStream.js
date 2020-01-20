const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/textFile2.txt', 'UTF-8');
const readStream = fs.createReadStream('./assets/lorem.md', 'UTF-8');


/*writeStream.write('Hello?');

writeStream.write(' Someone There?');*/

/*process.stdin.on('data', dataa => {
    writeStream.write(dataa);
});*/

/*}readStream.on('data', data => {
    writeStream.write(data);
});*/

// process.stdin.pipe(writeStream);

// readStream.pipe(writeStream);