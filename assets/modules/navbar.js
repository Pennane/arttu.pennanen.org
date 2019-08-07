let navbar = document.getElementById("navbar")

if (!navbar) throw new Error("No proper destination for navbar");

let navbarBrand = {
    href: "/",
    text: "pennane.",
    img: {
        src: "assets/icons/icon.svg",
    },
    customClasses: []
}

let navbarContent = [
    {
        href: "https://github.com/Pennane",
        text: "Github",
        title: "Github @Pennane",
        customClasses: []
    },
    {
        href: "https://twitter.com/arttupennane",
        text: "Twitter",
        title: "Twitter @arttupennane",
        customClasses: []
    },
    {
        href: "/sub",
        text: "Projects",
        title: "Directory for all prior projects",
        customClasses: []
    }
]

function createNavBrand(item) {
    let link = document.createElement("a")
    let span = document.createElement("span")
    let img = document.createElement("img")

    link.className = "navlink brand"
    link.title = item.text
    link.href = item.href

    item.customClasses.forEach(name => {
        link.classList.toggle(name, true)
    });

    span.className = "brand"
    span.textContent = item.text

    img.className ="brand"
    img.src = item.img.src

    link.appendChild(img)
    link.appendChild(span)

    return link
}

function createNavItem(item) {
    let link = document.createElement("a")
    link.className = "navlink"

    item.customClasses.forEach(name => {
        link.classList.toggle(name, true)
    });

    link.textContent = item.text

    return link
}

let navbarWrapper = document.createElement("div")
navbarWrapper.className = "navwrapper"

navbarWrapper.appendChild(createNavBrand(navbarBrand))

let navlinks = document.createElement("div")
navlinks.className ="navlinks"

navbarContent.forEach(item => {
    navlinks.appendChild(createNavItem(item))
})

navbarWrapper.appendChild(navlinks)

navbar.appendChild(navbarWrapper)