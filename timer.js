const waitTime = 5000;
const waitInterval = 100;
let currentTime = 0;


const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`Waiting ${p}% ...`);
}

console.log(`Setting a ${waitTime/1000} seconds delay`);

const finished = () => {
    clearInterval(interval);
    console.log('100%');
}


const interval = setInterval(incTime, waitInterval);
setTimeout(finished, waitTime);