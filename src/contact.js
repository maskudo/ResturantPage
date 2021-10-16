import imgMap from "./img/map.png"
import bonfireIcon from "./img/bonfireIcon.png"
export function renderContact(){
    const contact = document.createElement('div')
    contact.classList.add('mainContent')
    
    const bonfire = document.createElement('div')
    bonfire.id = "bonfire"
    const bonfireName = document.createElement('h3');
    bonfireName.innerHTML = "Third bonfire from the Undead Asylum.<br>Warping with Lord-Vessel available.";
    const icon = document.createElement("img")
    icon.src = bonfireIcon
    icon.id = "icon"
    

    bonfire.append(icon)
    bonfire.append(bonfireName)
    
    const map = document.createElement('img');
    map.src = imgMap;
    map.id = 'imgMap';

    
    contact.append(map);
    contact.append(bonfire);

    return contact;
}