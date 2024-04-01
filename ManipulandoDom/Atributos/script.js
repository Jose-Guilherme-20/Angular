"use strict";

const p = document.querySelector("p");
p.setAttribute("class", `${p.getAttribute("class")} backgroud-red`);
// p.setAttribute("class", "active");
console.log(p);

p.removeAttribute("id");
