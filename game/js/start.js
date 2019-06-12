let animationTargetEl = document.querySelector(".hero")

const rnd = (min, max) => (Math.random() * (max - min)) + min;

const getAmount = () => 5 + Math.floor((window.innerWidth / 100) * 5)

let currentAmount = getAmount(window.innerWidth)

function createBubbles(amount, target) {
	amount = amount > 100 ? 100 : amount
	let old = document.querySelector(".heroanimator");
	let bubbleParent;
	if (old) {
		old.innerHTML = "";
		bubbleParent = old;
	} else {
		bubbleParent = document.createElement('div')
		bubbleParent.className = "heroanimator"
	}
	let duration = 100;
	for (let i = 0; i < amount; i++) {
        let el = document.createElement('div')
        let rn = Math.random() + 0.1
        el.style.left = `${rnd(3, 97)}%`;
        el.style.transform = `scale(${rn})`; 
		el.className = "bubble";
		el.style.animationDelay = `${-(i * duration * (Math.random() * 2))}s`;
		el.style.animationDuration = `${20 + (duration * (rn))}s`
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
		if (Math.abs(currentAmount - changedAmount ) > 40 ) {
			initBubbles()
			currentAmount = changedAmount;
		}
		
	}, 400)
})

initBubbles()