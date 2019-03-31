const sliceString = (selector) => {
	let str = document.querySelector(selector).textContent;
	let html = "";
	for (let i = 0; i < str.length; i++) {
		html += `<span class="${ str.charAt(i) === " " ? "char inlineletter char" : "char char"}${i+1} "> ${str.charAt(i)} </span>`;
	}
	document.querySelector(selector).innerHTML = html;
}

const setTrueVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

window.addEventListener("load", (event) => {
    for (let event = document.getElementsByTagName("img"), i = 0; i < event.length; i++)
        event[i].getAttribute("data-src") && event[i].setAttribute("src", event[i].getAttribute("data-src"))
}, !1);

(function () {
	setTrueVh()
	sliceString("h1")
	window.addEventListener("resize", setTrueVh)
	let spans = [...document.querySelectorAll("h1 span")]
	spans.forEach((span, i) => {
		span.style.animationDelay = 0.15 * (i + 1) + "s"
		let clear;
		span.addEventListener("mouseover", () => {
			span.classList.toggle("hovering", true)
		})
		span.addEventListener("mouseout", () => {
			setTimeout(() => {
				span.classList.toggle("hovering", false)
			}, 100)
		})
	})
})()
