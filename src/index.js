import "./style.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact";
import background from "./img/emberBackground.jpg";
import dungPie from "./img/dungPie.png";
import estus from "./img/estus.png";

const content = document.querySelector("#content");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${background})`;

function createHeader() {
  const header = document.createElement("header");
  const resturantName = document.createElement("h1");
  const bonfireImg1 = document.createElement("img");
  const bonfireImg2 = document.createElement("img");
  bonfireImg1.src = dungPie;
  bonfireImg2.src = estus;
  bonfireImg1.classList.add("headerImg");
  bonfireImg2.classList.add("headerImg");
  bonfireImg2.classList.add("headerImg2");

  resturantName.textContent = "Firelink Dine";
  header.appendChild(bonfireImg1);
  header.appendChild(resturantName);
  header.appendChild(bonfireImg2);

  content.appendChild(header);
}
function createFooter() {
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");
  const link = document.createElement("a");

  copyright.textContent = "Copyright © 2021";
  link.text = "maskudo";
  link.href = "https://github.com/maskudo";

  footer.append(copyright);
  footer.append(link);

  content.append(footer);
}
function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navBox");

  const home = document.createElement("button");
  home.textContent = "Home";
  home.id = "active";
  home.classList.add("active");
  nav.append(home);

  home.addEventListener("click", (e) => {
    setActive(home);
    content.append(renderHome());
    createFooter();
  });

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.id = "menu";
  nav.append(menu);
  menu.addEventListener("click", (e) => {
    setActive(menu);
    content.append(renderMenu());
    createFooter();
  });

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.id = "contact";
  nav.append(contact);
  contact.addEventListener("click", (e) => {
    setActive(contact);
    content.append(renderContact());
    createFooter();
  });

  content.append(nav);
}
function initMainContent() {
  content.append(renderHome());
}

function setActive(navButton) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.classList == "active") {
      button.classList.remove("active");
      button.id = "";
    }
  });
  const mainContent = content.querySelector(".mainContent");
  content.removeChild(mainContent);
  const footer = content.querySelector("footer");
  content.removeChild(footer);

  navButton.classList.add("active");
  navButton.id = "active";
}

createHeader();
createNav();
initMainContent();
createFooter();
