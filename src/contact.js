import {content} from "./index"

const contactPage = function(){
    content.replaceChildren()
    const about = document.createElement("div")
    about.classList.add("about")
    about.style.width = "500px"
    about.style.height = "300px"
    const titleh4 = document.createElement("h4")
    titleh4.textContent = "Contact"
    const description = document.createElement("p")
    description.textContent = "Phone Number: 01234 57890\nEmail:Shazads@hotmail.com\nCheck our social media too @shazadsRestaurant on twitter"
    description.style.fontSize = "1.5em"
    about.appendChild(titleh4)
    about.appendChild(description)
    content.appendChild(about)
}


export {contactPage}