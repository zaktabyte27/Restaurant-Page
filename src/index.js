import "./home"
import { homepage } from "./home"
import { contactPage} from "./contact"
import { menuPage } from "./menu"

const content = document.querySelector(".content")
const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")
export {content}

const about = document.createElement("div")
about.classList.add("about")
about.style.width = "500px"
about.style.height = "300px"
const titleh4 = document.createElement("h4")
titleh4.textContent = "About us"
const description = document.createElement("p")
description.textContent = "This is a nice restaurant that you should come to and eat lots of food. Check out the menu for nice food"
description.style.fontSize = "1.5em"
about.appendChild(titleh4)
about.appendChild(description)
content.appendChild(about)

homeBtn.addEventListener("click",homepage)
contactBtn.addEventListener("click",contactPage)
menuBtn.addEventListener("click",menuPage)