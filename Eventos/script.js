"use strict";
let alertTest = () => {
  alert("clicou no button");
};
const button = document.querySelector("button");
button.addEventListener("click", alertTest);

const t = document.querySelector("body");
const div = document.createElement("div");

t.insertBefore(div, button);

var ul = document.createElement("ul");
div.appendChild(ul);
