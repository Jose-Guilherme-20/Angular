"use strict";

/*
 *TextContext => retorna o text com formatações, mas sem os elementos html
 * innerText => Retorna somente o texto, sem formatações ou elementos html
 */
// não consegue adicionar tags html

const p = document.querySelector("p");
console.log(p.textContent);
console.log(p.innerText);

/*
 *InnerHtml => Retorna o texto, com formatações e com elementos html
 *createElement => cria um elemento HTML
 */

const div = document.querySelector("div");
console.log(1, div);

div.innerHTML = `${div.innerHTML} <strong> Esse é meu texto alterado</strong>`;

const elementUl = document.createElement("ul");
[1, 2, 3].forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.innerText = element;
  elementUl.appendChild(elementLi);
});
div.appendChild(elementUl);
