let sidebar = document.querySelector(".sidebar");

let scheduled = null;
window.addEventListener("resize", event => {
    if (!scheduled) {
        setTimeout(() => {

            if (window.innerWidth <= 700) {
                sidebar.classList.toggle("closed", true);
            } else {
                sidebar.classList.toggle("closed", false);
            }

            scheduled = null;
        }, 250);
    }
    scheduled = event;
});


document.getElementById("sidebar-toggler").addEventListener("click", event => {
    if (sidebar.classList.contains("closed")) {
        sidebar.classList.toggle("closed", false);
    } else {
        sidebar.classList.toggle("closed", true);
    }
});

if (window.innerWidth <= 700) {
    sidebar.classList.toggle("closed", true);
}


[...document.querySelectorAll('.local.navlink')].forEach(link => {
    let href = link.dataset.href
    link.addEventListener('click', e => {
        console.log('<object type="text/html" data="views/' + href + ' ></object>')
        document.getElementById("content").innerHTML = '<object type="text/html" data="views/' + href + '" ></object>'
    })
})


document.getElementById("content").innerHTML = '<object type="text/html" data="views/index.html" ></object>'