let pooltable = document.querySelector("#billiardtable")
let ballEl = document.querySelector(".whiteball")
let forceEl = document.querySelector(".force")
let tableStyle = getComputedStyle(pooltable)
let tH = pooltable.offsetHeight
let tW = pooltable.offsetWidth
ballEl.style.left = 100 + "px"
ballEl.style.top = 100 + "px"

// b = ball
let b = {
	el: ballEl,
	x: parseBallPos(ballEl, "x"),
	y: parseBallPos(ballEl, "y"),
	sx: 0,
	sy: 0,
}

// s = stick
let s = {
	x: 0,
	y: 0,
	x2: 0,
	y2: 0,
	force: 0
}

pooltable.addEventListener("mousedown", event => {
	if (event.button !== 0) return
	s.x = event.clientX - pooltable.offsetLeft
	s.y = event.clientY - pooltable.offsetTop
	window.addEventListener("mousemove", moved)
	event.preventDefault()
})

function moved(event) {
	if (event.buttons == 0) {
		window.removeEventListener("mousemove", moved)
		calculateVector(s, b, s.force)
		s.force = 0
	}
	s.x2 = event.clientX - pooltable.offsetLeft
	s.y2 = event.clientY - pooltable.offsetTop
	s.force = Math.sqrt(Math.pow((s.x2 - s.x), 2) + Math.pow((s.y2 - s.y), 2))
	forceEl.textContent = s.force
}

function calculateVector(el1, el2, force) {
	force = el1.x2 > el2.x ? -force : force
	if (force > 100) force = 100
	if (force < -100) force = -100

	let f = {
		x: force > 0 ? 1 : -1,
		y: el1.y2 < el2.y ? 1 : -1
	}

	let k = (el2.y - el1.y2) / (el2.x - el1.x2)

	let forceAbsolute = Math.abs(force)
	let cumx = el2.x,
		cumy = el2.y
	var i = 1;
	let drawMovement = () => {
		setTimeout(() => {
			i++;

			let s2 = getComputedStyle(el2.el)
			let y = parseFloat(s2.top)
			let x = parseFloat(s2.left)
			let acx = 0;
			let acy = 0;


			while (acx + acy < 5) {
				if (x + k > tW) {
					f.x = -1
				} else if (x - k < 0) {
					f.x = 1
				}
				if (y + 1 > tH) {
					f.y = -1
				} else if (y - 1 < 0) {
					f.y = 1
				}

				if (f.y > 0) {
					y += Math.abs(k)

				} else {
					y -= Math.abs(k)
				}

				if (f.x > 0) {
					x += 1
				} else {
					x -= 1
				}
				acx += Math.abs(1)
				acy += Math.abs(k)
				cumx += Math.abs(k);
				cumy += Math.abs(1);
			}


			let len = Math.sqrt(Math.pow((cumx - el2.x), 2) + Math.pow((cumy - el2.y), 2))
			el2.el.style.top = y + "px"
			el2.el.style.left = x + "px"

			if (len < forceAbsolute * 10) {
				drawMovement();
			} else {
				el2.x = parseFloat(el2.el.style.left)
				el2.y = parseFloat(el2.el.style.top)
			}
		}, ((i*5 / forceAbsolute)*2))
	}

	drawMovement();


}

function parseBallPos(el, axis) {
	let style = getComputedStyle(el)
	if (axis === "x") return parseFloat(style.left) + parseFloat(style.width) / 2
	else if (axis === "y") return parseFloat(style.top) + parseFloat(style.width) / 2
}