"use strict";

const form = document.forms.namedItem("radio-button");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const radio = form.radio;
  console.log(radio.value);

  submit.innerHTML = radio.value;
});

form.radio.forEach((res) => {
  res.addEventListener("change", (event) => {
    const { target } = event;

    if (target.checked) {
      change.innerHTML = target.value;
    }
  });
});
