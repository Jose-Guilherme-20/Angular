"use strict";

const strong = document.querySelector("strong");

// Encontrada o pai do elemento
// console.log(strong.parentElement);
// console.log(strong.parentNode);

// const p = document.querySelector(".paragrafo");

// console.log(p.parentElement);
// console.log(p.parentNode);

//Encontrando elementos filhos

// const container = document.querySelector(".container");

// console.log(container.children); // HTMLCollection
// console.log(container.childNodes); // NodeList

// Obtendo o primeiro filho

// const cont = document.querySelector(".container");

// console.log(cont.firstChild);
// console.log(cont.firstElementChild);
// cont.firstElementChild.addEventListener("click", () =>
//   console.log("O mundo é seu meu garoto")
// );

// Pegando o ultimo filho
const container = document.querySelector(".container");
console.log(container.lastChild);
console.log(container.lastElementChild);

//pegando o proximo irmão elemento
const h1 = document.querySelector("h1");

console.log(h1.nextSibling);
console.log(h1.nextElementSibling);

//pegando o elemento anterior

const p = document.querySelector("p");

console.log(p.previousSibling);
console.log(p.previousElementSibling);
