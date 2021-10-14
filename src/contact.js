import imgMap from "./img/map.png"
export function renderContact(){
    const contact = document.createElement('div')
    contact.classList.add('mainContent')
    
    const bonfire = document.createElement('h2');
    bonfire.textContent = "Bonfire No.: 3";

    const map = document.createElement('img');
    map.src = imgMap;
    map.id = 'imgMap';

    contact.append(bonfire);
    contact.append(map);
    contact.append("Location: Firelink Shrine");

    return contact;
}