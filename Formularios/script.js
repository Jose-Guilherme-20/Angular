"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value;
  const password = form.password.value;

  const formData = new FormData(form);

  formData.forEach();

  console.log(name, password);
});
