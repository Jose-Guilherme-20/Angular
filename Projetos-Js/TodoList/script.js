"use strict";

let GetBanco = () => {
  let banco = JSON.parse(localStorage.getItem("db")) ?? [];
  return banco;
};

let SetBanco = (data) => {
  localStorage.setItem("db", JSON.stringify(data));
};

const criarItem = (tarefa, status, index) => {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `<input type="checkbox" ${status} data-index=${index}>
  <div>${tarefa}</div>
  <input type="button" value="X" data-index=${index}>`;
  document.querySelector("#todoList").appendChild(item);
};

const limparTarefas = () => {
  const todoList = document.querySelector("#todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const atualizarTela = () => {
  limparTarefas();
  let banco = GetBanco();
  banco.forEach((item, index) => criarItem(item.tarefa, item.status, index));
};
const inserirItem = (event) => {
  const tecla = event.key;
  const texto = event.target.value;
  let banco = GetBanco();
  if (tecla === "Enter") {
    banco.push({ tarefa: texto, status: "" });
    SetBanco(banco);
    atualizarTela();
    event.target.value = "";
  }
};

const clickItem = (event) => {
  const elemento = event.target;
  const indice = elemento.dataset.index;
  if (elemento.type === "button") {
    removerItem(indice);
  } else if (elemento.type === "checkbox") {
    atualizarItem(indice);
  }
};

const atualizarItem = (index) => {
  let banco = GetBanco();
  banco[index].status = banco[index].status === "" ? "checked" : "";
  SetBanco(banco);
  atualizarTela();
};
const removerItem = (index) => {
  let banco = GetBanco();
  banco.splice(index, 1);
  SetBanco(banco);
  atualizarTela();
};

document.querySelector("#newItem").addEventListener("keypress", inserirItem);
document.querySelector("#todoList").addEventListener("click", clickItem);

atualizarTela();
