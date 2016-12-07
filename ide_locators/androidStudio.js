const fs = require('fs'),
    path = require('path');

const CONFIGURATION_FOLDER = "AndroidStudio";
const Windows = process.env.USERPROFILE + "\\.\\";
const Mac = process.env.HOME + "/Library/Preferences/";
const Linux = process.env.HOME + "/";

const listIDEVersions = (p) => {
    let folders = fs.readdirSync(p).filter((file) => {
        return fs.statSync(path.join(p, file)).isDirectory();
    });

    var versions = [];

    for (var i in folders) {
        var indexOfConf = folders[i].indexOf(CONFIGURATION_FOLDER);
        if (indexOfConf != -1) {
            versions.push(
                folders[i].substring(indexOfConf + CONFIGURATION_FOLDER.length, folders[i].length)
            );
        }
    }

    return versions;
};

const getLatestIDEVersionPath = (p) => {
    let versions = listIDEVersions(p);
    
    if (versions.length == 0) {
        return null;
    } else {
        var latest = 0;

        for (var i in versions) {
            var v = parseFloat(versions[i]);
            if (!isNaN(v)) {
                latest = Math.max(latest, v);
            }
        }

        return p + CONFIGURATION_FOLDER + latest;
    }
};

exports.get = (os) => {
    switch (os) {
        case 'win': return getLatestIDEVersionPath(Windows);
        case 'mac': return getLatestIDEVersionPath(Mac);
        case 'linux': return getLatestIDEVersionPath(Linux);
    }  
}