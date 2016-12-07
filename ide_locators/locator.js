const OS = require('./osHelper').get();

const ides = {
    "vcode": require('./vcode'),
    "android_studio": require('./androidStudio'),
};

exports.getIdes = () => {
    let kies = [];
    for (key in ides) {
        kies.push(key);
    }

    return kies;
};

exports.isInstalled = (ide) => {
    return getIDEUserPrefsPath(ide) != null;
};

const getIDEUserPrefsPath = (ide) => {
    return ides[ide].get(OS);
};
exports.getIDEUserPrefsPath = getIDEUserPrefsPath;