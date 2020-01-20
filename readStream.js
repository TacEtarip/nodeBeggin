const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorem.md', 'UTF-8');

//const readSecondStream = fs.createReadStream('./assets/textFile.txt', 'UTF-8');

console.log('type something...');

/*readSecondStream.on('data', data => {
    console.log(data);
});*/

/*readStream.on('data', data => {
    let dataString = data.toString().trim().replace(/ /g, '');
    console.log(`Number of characters: ${ dataString.length }`);
});*/

readStream.on('data', data => {

    console.log(`Number of characters: ${ data.length - 1 }`);
});

readStream.once('data', data => {
    console.log(data);
});

readStream.on('end', () => {
    console.log('finished');
});