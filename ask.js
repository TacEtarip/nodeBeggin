const readLine = require('readline');
const waitTime = 3000;

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How do you like NODE? ', answer => {
    console.log(`Your answer: ${answer}`);
    rl.question('So what do you like about it?', secondAns => {
        console.log(`Your answer: ${secondAns}`);
        console.log('Hmmm... wait for 3 seconds');
        setTimeout(() => {
            console.log('Ok you can go now');
        }, waitTime);
        rl.close();
    });
});