const ActiveModal = () => {
  let modal = document.querySelector("#modal");
  modal.classList.add("active");
};
const CloseModal = () => {
  let modal = document.querySelector("#modal");
  modal.classList.remove("active");
};

// CRUD - read, update, create, delete

const tempClient = {
  nome: "José",
  email: "jose@gmail.com",
  celular: "9999999999",
  cidade: "Luziânia",
};

const createClient = () => {};

//Eventos
document
  .querySelector("#cadastrarCliente")
  .addEventListener("click", ActiveModal);
document.querySelector("#modalClose").addEventListener("click", CloseModal);
