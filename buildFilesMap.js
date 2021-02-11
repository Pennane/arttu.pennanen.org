const fs = require('fs')
const path = require('path')
const targetFolder = './public/sub'

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

const isUnixHiddenPath = function(path) {
  return /(^|\/)\.[^\/\.]/g.test(path)
}

const isNotUnixHiddenPath = function(path) {
  return !isUnixHiddenPath(path)
}

const isNotHiddenProject = function(directory) {
  return hiddenProjects.indexOf(directory) === -1
}

const filterDirectories = directories => {
  return directories.filter(
    d => isNotUnixHiddenPath(d) && isNotHiddenProject(d)
  )
}

const defaultObject = directory => {
  return {
    url: `/sub/${directory}`,
    name: {
      en: directory,
      fi: directory
    }
  }
}

const isObject = o => typeof o === 'object' && o !== null

const isString = text => typeof text === 'string' || text instanceof String

const parseDate = str => {
  if (!str || !isString(str)) return null
  let parts = str.split('.')
  return new Date(parts[2], parts[1] - 1, parts[0]).getTime()
}

const parseString = str => {
  if (!str || !isString(str)) return null
  return str
}

const parseArray = arr => {
  if (!arr || !Array.isArray(arr)) return null
  return arr
}

const parseIcon = (icon, url, directory) => {
  if (!icon || !isString(icon)) return null
  return path.join('/sub', directory, icon)
}

const parseMultiLanguage = item => {
  if (!item || !isObject(item)) return null
  let en = parseString(item.en)
  let fi = parseString(item.fi)
  if (!en && !fi) return null

  return {
    en: en || fi,
    fi: fi || en
  }
}

const parseObject = (directory, config) => {
  let parsed = {
    url: parseString(config.url) || `/sub/${directory}`,
    custom_url: parseString(config.url) && true,
    name: parseMultiLanguage(config.name) || directory,
    description: parseMultiLanguage(config.description) || undefined,
    icon: parseIcon(config.icon, config.url, directory) || undefined,
    date: parseDate(config.date) || 0
    // technologies: parseArray(config.technologies) || undefined
  }
  return parsed
}

const directoryToObject = directory => {
  let configTarget = `${targetFolder}/${directory}/project-config.json`
  if (fs.existsSync(configTarget)) {
    let raw = fs.readFileSync(configTarget)
    let config = JSON.parse(raw)
    return parseObject(directory, config)
  } else {
    return defaultObject(directory)
  }
}

let directories = filterDirectories(fs.readdirSync(targetFolder))

let projectObjects = directories.map(directoryToObject)

let chronologicalProjects = projectObjects.sort((a, b) =>
  a.date < b.date ? 1 : -1
)

fs.writeFileSync(
  './src/assets/data/projects.json',
  JSON.stringify(chronologicalProjects)
)
