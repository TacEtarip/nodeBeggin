const fs = require('fs');


fs.renameSync('./assets/notes.md', './assets/notev2.md');

fs.rename('./assets/colors.json', './assets/colorsv2.json', err => {
    if (err)
        throw err;
});

setTimeout(() => {
    fs.unlinkSync('./assets/test.json');
}, 4000);