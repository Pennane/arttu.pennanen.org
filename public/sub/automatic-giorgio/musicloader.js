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


const amountOfTracks = 1
let trackIds = []
let tracks = []

for (let i = 0; i < amountOfTracks; i++) {
    let id;
    do {
        id = randomIntegerFromRange(0, 106)
    } while (trackIds.indexOf(id) > -1)
    trackIds.push(id)
}

const getTracks = () => {
    return new Promise(async (resolve, reject) => {
        if (tracks.length > 0) {
            return resolve(Promise.all(tracks))
        } else {
            trackIds.forEach(id => {
                let track = loadTrack(id)
                tracks.push(track)
            })

           return resolve(Promise.all(tracks)) 
        }
    })
}

export default getTracks