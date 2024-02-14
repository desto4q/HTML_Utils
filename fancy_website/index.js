import data from "./data.json" assert {type: "json"}


let nav_content = document.querySelector(".nav_content .links")

let sponsorbox = document.querySelector(".sponsor_box")

for await (let i of data.links) {
    let a_tag = document.createElement("a")
    a_tag.href = "#"
    a_tag.innerText = i
    nav_content.appendChild(a_tag)
}
let a_tags = document.querySelectorAll("a")
for (let tag of a_tags) {
    tag.onclick = (e) => {
        e.preventDefault()
    }
}


for (let spons of data.sponsors) {
    let icon = document.createElement("img")
    icon.classList.add("icon")
    icon.src= spons.link
    
    sponsorbox.appendChild(icon)

} 