const cp = require('child_process');

const spawnQuestions = cp.spawn('node', ['questionsTwo.js']);




spawnQuestions.stdin.write('Luis \n');
spawnQuestions.stdin.write('12 \n');
spawnQuestions.stdin.write('IDK \n');


spawnQuestions.stdout.on('data', data => {
    console.log(`from the question app: ${data}`);
});



spawnQuestions.on('close', () => {
    console.log('GOOD BYE');
});