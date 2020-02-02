(async () => {
    let destination = document.getElementById("address");
    let popupElement = document.querySelector(".popup");

    let call = await fetch("https://ip-api.com/json?fields=query");
    let { query } = JSON.parse(await call.text());

    destination.textContent = await query;

    destination.addEventListener('click', (event) => {
        // Write address to clipboard
        navigator.clipboard.writeText(query).catch(console.log)
        // Have a popup appear
        popup(event, popupElement)
    });

    function popup(event, element) {
        // If element is not closed, return
        if ([...element.classList].indexOf("hidden") === -1) return;

        element.classList.remove("closed", "hidden")

        setTimeout(() => {
            element.classList.add("hidden")
        }, 2500)

        setTimeout(() => {
            // if not hidden, return. (fixes spam clicking visual glitches)
            if ([...element.classList].indexOf("hidden") === -1) return;
            element.classList.add("closed")
        }, 3800)

    }
})();