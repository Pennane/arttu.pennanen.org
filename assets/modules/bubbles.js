(async ()=>{

await import ('/vendor/basicScroll.min.js')

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
        let nr = rnd(3, 97).toFixed(0)
        el.style.left = `${nr}%`;
        el.style.transform = `scale(${rn.toFixed(2)}) translateX(-50%)`;
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
        if (Math.abs(currentAmount - changedAmount) > 15) {
            initBubbles()
            currentAmount = changedAmount;
        }

    }, 500)
})

initBubbles()

let instance = basicScroll.create({
    elem: document.querySelector('body'),
    from: 'top-top',
    to: 'bottom-bottom',
    props: {
        '--animationparallax': {
            from: `-${parseInt(document.body.scrollHeight / 10)}px`,
            to: '0px',
        }
    }
})
instance.start()

})();