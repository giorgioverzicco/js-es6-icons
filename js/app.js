import { data } from "./data.js";

// FUNCTIONS
function addDataToDOM(arr, parent) {
  parent.innerHTML = "";

  arr.forEach((el) => {
    const box = boxTpl.cloneNode(true);
    const { name, prefix, type, family, color } = el;

    box.querySelector(".box").classList.add(`box--${type}`);
    box.querySelector(".box__icon").style.color = color;
    box.querySelector(".box__icon i").classList.add(family, prefix + name);
    box.querySelector(".box__text").innerHTML = name;

    parent.append(box);
  });
}

// MAIN
const boxWrapper = document.querySelector("#box-wrapper");
const boxTpl = document.querySelector("#tpl-box").content;
const selectElm = document.querySelector("#icon-type");
const iconTypes = [...new Set(data.map((d) => d.type))];

addDataToDOM(data, boxWrapper);

iconTypes.forEach((type) => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  selectElm.innerHTML += `<option value="${type}">${typeCapitalized}</option>`;
});

selectElm.addEventListener("change", function (e) {
  const type = e.target.value;
  const filteredData = data.filter((d) => d.type === type || type === "all");
  addDataToDOM(filteredData, boxWrapper);
});
