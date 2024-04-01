"use strict";
//QuerySelector
//Apenas um elemento
const h1 = document.querySelector("h1");
//Apenas um elemento pela sua classe
const p = document.querySelector(".paragrafo");
//Apenas um elemento pelo seu id
const idP = document.querySelector("#paragrafo");
console.log(h1);

//QuerySelectorAll
//Todos os elementos

const muitosP = document.querySelectorAll("p");
muitosP.forEach((element, index) => {
  element.style.color = "#fff";
  element.style.padding = "25px";

  if (index == 0) {
    element.style.backgroundColor = "blue";
  }
  if (index == 1) {
    element.style.backgroundColor = "red";
  }
  console.log(element);
});

//GetElementById
var elementById = document.getElementById("paragrafo");

//GetByElementByClassName
//ForEach não funciona pois a o metodo não é node list e sim um htmlCollection
const pClassName = document.getElementsByClassName("paragrafo");
console.log(p);

//GetElementsByTagName
//somente pela tag do html

const tagHtml = document.getElementsByTagName(p);
