let links_tag = document.querySelectorAll("a")

for (i of links_tag) {
    i.addEventListener("click", (e) => {
        e.preventDefault()
    })
}