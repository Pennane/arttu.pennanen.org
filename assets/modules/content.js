const path = '/assets/content/content.json'
const projectTarget = document.querySelector('.projects')

const newEl = (type, classes) => {
    let e = document.createElement(type)
    e.className = classes.join(" ")
    return e
}

const createProject = (data, target) => {
    let a = newEl('a', ["flex", "project-div"])
    a.setAttribute("id", data.name)
    a.setAttribute("href", data.href)
    a.setAttribute("title", data.name)

    let cover = newEl('div', ["project"])
    let header = newEl('h3', data.whiteText ? ["project-header invertable"] : ["project-header"])
    header.textContent = data.name
    cover.appendChild(header)

    let bgOuter = newEl('div', ["project-bg"])
    let bgInner = newEl('div', data.invert ? ["project-bg invert"] : ["project-bg"])
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