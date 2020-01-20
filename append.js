const fs = require('fs');
const colorData = require('./assets/colors.json');

colorData.colorList.forEach(color => {
    fs.appendFile('./assets/colors.md', `${color.name}: ${color.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});