const {
    EventEmitter
} = require('events');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestions] = questions;
    const emitter = new EventEmitter();
    const questionsAnswered = answer => {
        emitter.emit('answer', answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionsAnswered);
        } else {
            emitter.emit('complete', answers);
            done(answers);
        }
    }
    rl.question(firstQuestions, questionsAnswered);

    return emitter;
};