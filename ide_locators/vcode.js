const fileHelper = require('./fileHelper');
const Windows = process.env.APPDATA + "\\Code\\User\\";
const Mac = process.env.HOME + "/Library/Application Support/Code/User/";
const Linux = process.env.HOME + "/.config/Code/User/";
const Keyfiles = "keybindings.json";

exports.get = (os) => {
    switch (os) {
        case 'win': return fileHelper.exists(Windows) ? Windows : null;
        case 'mac': return fileHelper.exists(Mac) ? Mac : null;
        case 'linux': return fileHelper.exists(Linux) ? Linux : null;
    } 
};