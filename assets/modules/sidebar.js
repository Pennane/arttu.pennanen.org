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
    let obj = document.createElement("object")
    obj.type = "text/html"
    obj.data = "views/" + href

    link.addEventListener('click', e => {
        while (document.getElementById("content").firstChild) {
            document.getElementById("content").removeChild(document.getElementById("content").firstChild)
        }
        document.getElementById("content").appendChild(obj)
        if (window.innerWidth <= 700) {
            sidebar.classList.toggle("closed", true);
        }
    })
})


document.getElementById("content").innerHTML = '<object type="text/html" data="views/index.html" ></object>'