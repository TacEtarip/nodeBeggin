const fs = require('fs');

// fs.renameSync('./www', './w3');

/*fs.rmdir('./w3/files/uploads/uploads', err => {
    if (err)
        throw err;
});*/

fs.readdirSync('./w3/files/uploads').forEach(file => {
    fs.unlinkSync(`./w3/files/uploads/${file}`);
});