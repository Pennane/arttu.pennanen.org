const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomFloatFromRange = (min, max) => Math.random() * (max - min + 1) + min
const randomIntegerFromRange = (min, max) => Math.floor(randomFloatFromRange(min, max))

const loadAudioBuffer = (url, context) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                return resolve(audioBuffer)
            })
    })

}

const loadTrack = (id) => {
    return new Promise(async (resolve, reject) => {
        const url = './assets/music/giorgio/g' + id + '.ogg'
        const context = new AudioContext();
        let audio = await loadAudioBuffer(url, context)
        return resolve(audio)
    })

}


const amountOfTracks = 15
let trackIds = []
let tracks = []
let trackPromises = []

for (let i = 0; i < amountOfTracks; i++) {
    let id;
    do {
        id = randomIntegerFromRange(0, 106)
    } while (trackIds.indexOf(id) > -1)
    trackIds.push(id)
}

trackIds.forEach(id => {
    let track = loadTrack(id)
    .then(async (loaded) => {
        tracks.push(await loaded)
    })
    trackPromises.push(track)

})

const getTracks = () => {
    return new Promise(async (resolve, reject) => {
        if (tracks.length === 0) {
            Promise.any(trackPromises).then(() => {
                return resolve(tracks)
            })
        } else {
            return resolve(tracks)
        }
    })
}

export default getTracks