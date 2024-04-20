const ActiveModal = () => {
  let modal = document.querySelector("#modal");
  modal.classList.add("active");
};
const CloseModal = () => {
  let modal = document.querySelector("#modal");
  modal.classList.remove("active");
  ClearFields();
};

// CRUD - read, update, create, delete
const GetBanco = () => JSON.parse(localStorage.getItem("db_client")) ?? [];

const SetBanco = (client) => {
  localStorage.setItem("db_client", JSON.stringify(client));
};
const tempClient = {
  nome: "José",
  email: "jose@gmail.com",
  celular: "9999999999",
  cidade: "Luziânia",
};
//CRUD - DELETE
const DeleteClient = (index) => {
  const dbClient = ReadClient();
  dbClient.splice(index, 1);
  SetBanco(dbClient);
  UpdateTable();
};
//CRUD - UPDATE

const fillFields = (client) => {
  (document.querySelector("#nome").value = client.nome),
    (document.querySelector("#email").value = client.email),
    (document.querySelector("#celular").value = client.celular),
    (document.querySelector("#cidade").value = client.cidade);
  document.querySelector("#nome").dataset.index = client.index;
};
const UpdateClient = (index, client) => {
  const dbClient = ReadClient();
  dbClient[index] = client;
  SetBanco(dbClient);
};

//CRUD - READ
const ReadClient = () => GetBanco();
// fetch("https://localhost/client").then(res => res.json)
// CRUD - CREATE
const CreateClient = (client) => {
  const db_client = ReadClient();
  db_client.push(client);
  SetBanco(db_client);
};

const isValidFilds = () => {
  return document.querySelector("#form").reportValidity();
};
const SaveClient = () => {
  if (isValidFilds()) {
    const client = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      celular: document.querySelector("#celular").value,
      cidade: document.querySelector("#cidade").value,
    };
    const index = document.querySelector("#nome").dataset.index;
    if (index == "new") {
      CreateClient(client);
      UpdateTable();
      CloseModal();
    } else {
      UpdateClient(index, client);
      UpdateTable();
      CloseModal();
    }
  }
};
const CreateRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${client.nome}</td>
  <td>${client.email}</td>
  <td>${client.celular}</td>
  <td>${client.cidade}</td>
  <td>
      <button type="button" class="button green" data-action="edit-${index}">Editar</button>
      <button type="button" class="button red" data-action="delete-${index}">Excluir</button>
  </td>
`;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
};
const UpdateTable = () => {
  const dbClient = ReadClient();
  ClearTable();
  dbClient.forEach(CreateRow);
};
const ClearTable = () => {
  const table = document.querySelector("#tableClient>tbody");
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
};

const ClearFields = () => {
  document.querySelectorAll(".modal-field").forEach((x) => (x.value = ""));
};

const EditClient = (index) => {
  const client = ReadClient()[index];
  client.index = index;
  fillFields(client);
  ActiveModal();
};
const EditDelete = (event) => {
  const [element, index] = event.target.dataset.action.split("-");
  if (element == "edit") {
    EditClient(index);
  } else {
    DeleteClient(index);
  }
};
UpdateTable();
//Eventos
document
  .querySelector("#cadastrarCliente")
  .addEventListener("click", ActiveModal);
document.querySelector("#modalClose").addEventListener("click", CloseModal);

document.querySelector("#salvar").addEventListener("click", SaveClient);

document
  .querySelector("#tableClient>tbody")
  .addEventListener("click", EditDelete);
