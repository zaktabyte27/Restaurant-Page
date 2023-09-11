import {content} from "./index"

const menuPage = function(){
    content.replaceChildren()
    const about = document.createElement("div")
    about.classList.add("about")
    about.style.width = "500px"
    about.style.height = "300px"
    const titleh4 = document.createElement("h4")
    titleh4.textContent = "Menu"
    const description = document.createElement("p")
    description.textContent = "Check out our amazing menu of food"
    description.style.fontSize = "1.5em"
    about.appendChild(titleh4)
    about.appendChild(description)
    content.appendChild(about)
}


export {menuPage}