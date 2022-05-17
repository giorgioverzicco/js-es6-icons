import { data } from "./data.js";

const container = document.querySelector(".container");
const boxTpl = document.querySelector("#tpl-box").content;

data.forEach((el) => {
  const box = boxTpl.cloneNode(true);
  const { name, prefix, type, family, color } = el;

  box.querySelector(".box__icon").classList.add(type);
  box.querySelector(".box__icon").style.color = color;
  box.querySelector(".box__icon i").classList.add(family, prefix + name);
  box.querySelector(".box__text").innerHTML = name;

  container.append(box);
});
