import imgHome from './img/home.jpg';
export function renderHome(){
    const home = document.createElement('div');
    home.classList.add('mainContent');

    const image = document.createElement('img');
    image.src = imgHome;
    image.id = 'imgHome';

    const about = document.createElement('h1');
    about.textContent = "About Us";

    const description = document.createElement('p');
    description.textContent = "Rest your weary bones and mingle with your fellow pilgrims in Lordran's finest lodge and resturant.";
    
    const note = document.createElement('p');
    note.textContent = "*Fast-travel by Lord Vessel accessible.";

    home.append(about);
    home.append(image);   
    home.append(description);
    home.append(note);
    return home;
}