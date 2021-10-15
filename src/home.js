import imgHome from './img/chef.png';
export function renderHome(){
    const home = document.createElement('div');
    home.classList.add('mainContent');

    const image = document.createElement('img');
    image.src = imgHome;
    image.id = 'imgHome';

    const about = document.createElement('h1');
    about.id = "about"
    about.textContent = "About Us";

    const description = document.createElement('p');
    description.innerHTML = "<br>We have water, moss, moisture, these nice iron bars...<br>Now dish up some souls! Vee hee hee! ";
    description.id = "homeDescription"

    home.append(about);
    home.append(image);   
    home.append(description);
    return home;
}