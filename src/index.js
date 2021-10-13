import "./style.css";
import "./home.js";
import "./menu.js";
import "./contact.js";


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
        //set active
        //render
    })

    const menu = document.createElement('button');
    menu.textContent = 'Menu'
    menu.id = 'menu';
    nav.append(menu);


    const contact = document.createElement('button');
    contact.textContent = 'Contact';
    contact.id = 'contact';
    nav.append(contact);

    content.append(nav);
}

function setActive(navButton){
    home.classList.remove('active')
    menu.classList.remove('active')
    contact.classList.remove('active')
    
    navButton.classList.add('active')
}

createHeader();
createNav();