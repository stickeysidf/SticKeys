const fs = require('fs');

exports.exists = (path) => {
    let exists = fs.existsSync(path);
    return exists;
};