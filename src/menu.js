import Estus from "./img/estus.png";
import bloodRed from "./img/bloodredMossClump.png";
import bloomingPurple from "./img/bloomingPurpleMossClump.png";
import divineBlessing from "./img/divineBlessing.png";
import greenBlossom from "./img/greenBlossom.png";
import dungPie from "./img/dungPie.png";

function createMenuItem(source, name) {
  const menuItem = document.createElement("div");
  const itemName = document.createElement("h2");
  const itemImage = document.createElement("img");

  menuItem.className = "menu-item";

  itemImage.src = source;
  itemName.textContent = name;

  menuItem.append(itemImage);
  menuItem.append(itemName);

  return menuItem;
}
export function renderMenu() {
  const menu = document.createElement("div");
  menu.classList.add("mainContent");
  menu.classList.add("menu");

  const beverages = document.createElement("h1");
  const mainDish = document.createElement("h1");

  beverages.textContent = "Beverages";
  mainDish.textContent = "Main Dishes";

  const item1 = createMenuItem(Estus, "Estus");
  const item2 = createMenuItem(divineBlessing, "Diving Blessing");
  const item3 = createMenuItem(dungPie, "Dung Pie");
  const item4 = createMenuItem(bloomingPurple, "Blooming Purple Moss Clump");
  const item5 = createMenuItem(greenBlossom, "Green Blossom");
  const item6 = createMenuItem(bloodRed, "Bloodred Moss Clump");

  menu.append(beverages);
  menu.append(item1);
  menu.append(item2);
  menu.append(mainDish);
  menu.append(item3);
  menu.append(item4);
  menu.append(item5);
  menu.append(item6);
  return menu;
}
