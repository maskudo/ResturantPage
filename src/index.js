import "./style.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact";


const content = document.querySelector('#content');

function createHeader(){
    const header = document.createElement('header');
    const resturantName = document.createElement('h1');

    resturantName.textContent = 'Firelink Dine';
    header.appendChild(resturantName);

    content.appendChild(header);
}
function createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('navBox');
    
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.id = 'home';
    nav.append(home);

    home.addEventListener('click',e => {
        setActive(home);
        content.append(renderHome());
    })

    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.id = 'menu';
    nav.append(menu);
    menu.addEventListener('click',e => {
        setActive(menu);
        content.append(renderMenu());
    })

    const contact = document.createElement('button');
    contact.textContent = 'Contact';
    contact.id = 'contact';
    nav.append(contact);
    contact.addEventListener('click',e => {
        setActive(contact);
        content.append(renderContact());
    })

    content.append(nav);
    
}
function initMainContent()
{
    content.append(renderHome());
}

function setActive(navButton){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=>{
        if(button.classList == 'active'){
            button.classList.remove('active');
        }
    })
    const mainContent = content.querySelector('.mainContent')
    console.log(mainContent)
    content.removeChild(mainContent)
    
    navButton.classList.add('active')
}

createHeader();
createNav();
initMainContent();