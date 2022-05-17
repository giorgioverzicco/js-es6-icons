import { data } from "./data.js";

const container = document.querySelector(".container");
const boxTpl = document.querySelector("#tpl-box").content;
const selectElm = document.querySelector("#icon-type");
const iconTypes = [];

data.forEach((el) => {
  const box = boxTpl.cloneNode(true);
  const { name, prefix, type, family, color } = el;

  box.querySelector(".box").classList.add(`box--${type}`);
  box.querySelector(".box__icon").style.color = color;
  box.querySelector(".box__icon i").classList.add(family, prefix + name);
  box.querySelector(".box__text").innerHTML = name;

  if (!iconTypes.includes(type)) {
    iconTypes.push(type);
  }

  container.append(box);
});

iconTypes.forEach((type) => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  selectElm.innerHTML += `<option value="${type}">${typeCapitalized}</option>`;
});

selectElm.addEventListener("change", function (e) {
  const type = e.target.value;
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    if (box.classList.contains(`box--${type}`) || type === "all") {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
});
