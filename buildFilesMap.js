const fs = require('fs')
const targetFolder = "./public/sub";

const isUnixHiddenPath = function (path) {
    return (/(^|\/)\.[^\/\.]/g).test(path);
};

const isNotUnixHiddenPath = function (path) {
    return !isUnixHiddenPath(path)
};

let directories = fs.readdirSync(targetFolder);
directories = directories.filter(isNotUnixHiddenPath)
if (!directories) throw new Error('faulty targetfolder')
fs.writeFileSync('./src/assets/data/subfolders.json', JSON.stringify(directories))