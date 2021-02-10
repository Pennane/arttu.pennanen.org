const fs = require('fs')
const targetFolder = './public/sub'

const isUnixHiddenPath = function(path) {
  return /(^|\/)\.[^\/\.]/g.test(path)
}

const isNotUnixHiddenPath = function(path) {
  return !isUnixHiddenPath(path)
}

const hiddenProjects = [
  '60seconds',
  'countdown',
  'cursors',
  'kalastuspeli',
  'landing-page-demo',
  'peigom-bot_opas',
  'rotmg_fame',
  'thonketspinner',
  'truewave',
  'yla-aste_html',
  'pokeri_kadet',
  'rankitdemo',
  'waveanimation'
]

let directories = fs.readdirSync(targetFolder)
directories = directories.filter(isNotUnixHiddenPath)
directories = directories.filter(
  directory => hiddenProjects.indexOf(directory) === -1
)
if (!directories) throw new Error('faulty targetfolder')
fs.writeFileSync(
  './src/assets/data/subfolders.json',
  JSON.stringify(directories)
)
