exports.get = () => {
    switch (process.platform) {
        case 'darwin':
            return 'mac';
        case 'win32':
            return 'win';
        case 'linux':
            return 'linux'; 
    }

    return null;
};