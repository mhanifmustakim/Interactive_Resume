const mainContent = document.querySelector("#main-content");
const headers = document.querySelectorAll(".section > header");
const sections = document.querySelectorAll(".section");

headers.forEach(header => header.addEventListener("click", e => {
    if (e.target.innerText == "...") {
        sections.forEach(section => {
            const content = section.querySelector(".content");
            section.classList.remove("display-none");
            if (content) {
                content.classList.add("display-none");
            }
            section.classList.remove("focused");
        })
        mainContent.classList.toggle("focused");
        e.target.parentElement.classList.add("display-none");
        return
    }
    headers.forEach(header => {
        if (header.innerText != e.target.innerText) {
            header.parentElement.classList.toggle("display-none")
        }
        else {
            header.parentElement.classList.toggle("focused");
        }
    })
    mainContent.classList.toggle("focused");
    e.target.nextElementSibling.classList.toggle("display-none")
}))