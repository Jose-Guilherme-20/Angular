"use strict";

const input = document.getElementById("name");
console.log(input.value);

setTimeout(() => {
  input.value = "Jorginho";
  console.log(input.value);
}, 1000);
