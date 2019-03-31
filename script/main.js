const sliceString = (selector) => {
	let str = document.querySelector(selector).textContent;
	let html = "";
	for (let i = 0; i < str.length; i++) {
		html += `<span class="${ str.charAt(i) === " " ? "char inlineletter char" : "char char" }${i+1} "> ${str.charAt(i)} </span>`;
	}
	document.querySelector(selector).innerHTML = html;
}

const setTrueVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

const gradient = ["#0d6fd3", "#196ac9", "#2665bf", "#325fb5", "#3f5aab", "#4b55a1", "#585097", "#644b8e", "#714684", "#7d417a", "#8a3c70", "#963666", "#a3315c", "#af2c52"];

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
