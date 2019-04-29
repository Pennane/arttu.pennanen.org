if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            navigator.serviceWorker.register('/sw.js')
        } catch(err) {
            console.log('ServiceWorker registration failed: ', err);
        }
    });
  }


const path = '/assets/content/content.json'
const projectTarget = document.querySelector('.projects')

const newEl = (type, classes) => {
    let e = document.createElement(type)
    e.className = classes.join(" ")
    return e
}

const createProject = (data, target) => {
    let a = newEl('a', ["flex","project-div"])
    a.setAttribute("id",  data.name)
    a.setAttribute("href", data.href)
    a.setAttribute("title", data.name)

            let cover = newEl('div', ["project"])
                    let header =  newEl('h3', data.whiteText ? ["project-header invertable"] :  ["project-header"]) 
                    header.textContent = data.name
                    cover.appendChild(header)

                    let bgOuter = newEl('div', ["project-bg"])
                            let bgInner = newEl('div', data.invert ? ["project-bg invert"] :  ["project-bg"])
                            bgInner.style.backgroundImage = `url(${data.imgUrl})`
                            bgOuter.appendChild(bgInner)
                    cover.appendChild(bgOuter)
            a.appendChild(cover)

            let meta = newEl('div', ["project-meta"])
                    let description = newEl('p', ["project-meta"])
                    description.textContent = data.description
                    meta.appendChild(description)
            a.appendChild(meta)
            
    target.appendChild(a)
}

const loadJSON = (path, callback) => {
    let req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', path, true);
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == "200") {
            callback(JSON.parse(req.responseText));
        }
    }
    req.send(null);
}


loadJSON(path, data => {
    let wrapperElement = document.createElement('div')
    data.projects.forEach(project => {
        createProject(project, wrapperElement)
    });
    projectTarget.appendChild(wrapperElement)
})

let animationTargetEl = document.querySelector(".animationparent")

const rnd = (min, max) => (Math.random() * (max - min)) + min;

const getAmount = () => 20 + Math.floor((window.innerWidth / 100) * 2)

let currentAmount = getAmount(window.innerWidth)

function createBubbles(amount, target) {
	amount = amount > 100 ? 100 : amount;
	let old = document.querySelector(".heroanimator");
	let bubbleParent;
	if (old) {
		old.innerHTML = "";
		bubbleParent = old;
	} else {
		bubbleParent = document.createElement('div')
		bubbleParent.className = "heroanimator"
	}
	let duration = 400;
	for (let i = 0; i < amount; i++) {
        let el = document.createElement('div')
        let rn = Math.random() + 0.1
        el.style.left = `${rnd(3, 97).toFixed(0)}%`;
        el.style.transform = `scale(${rn.toFixed(2)})`; 
		el.className = "bubble";
		el.style.animationDelay = `${(-(i * duration * (Math.random() * 2))).toFixed(0)}s`;
		el.style.animationDuration = `${(20 + (duration * (rn))).toFixed(0)}s`
		bubbleParent.appendChild(el)
	}
	target.appendChild(bubbleParent)
}

function initBubbles() {
	let amount = getAmount()
	createBubbles(amount, animationTargetEl)
}

let timeout;
window.addEventListener("resize", event => {
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		let changedAmount = getAmount();
		if (Math.abs(currentAmount - changedAmount ) > 20 ) {
			initBubbles()
			currentAmount = changedAmount;
		}
		
	}, 400)
})

initBubbles()