/*function grap(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}*/

const grap = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}


const greeting = grap('--greeting');
const user = grap('--user');

console.log(`${greeting} ${user}`);


//console.log(process.pid);
//console.log(process.versions.node);
//console.log(process.argv);

// const [, , firstName, lastName] = process.argv;




// console.log(`Your name is ${firstName} ${lastName}`);