const fs = require('fs')
const targetFolder = "./public/sub";

let directories = fs.readdirSync(targetFolder);
if (!directories) throw new Error('faulty targetfolder')
fs.writeFileSync('./src/assets/data/subfolders.json', JSON.stringify(directories))