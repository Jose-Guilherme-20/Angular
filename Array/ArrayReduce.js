const pedidos = [
  {
    id: 1,
    nome: "sanduiche combo z",
    alimento: "sanduiche",
    bebida: "suco de manga",

    preco: 27,
  },
  {
    id: 2,
    nome: "pizza",
    alimento: "pizza",
    bebida: "suco de laranja",
    preco: 47,
  },
  {
    id: 3,
    nome: "lasanha",
    alimento: "carne, macarrao",
    bebida: "suco de abacaxi",
    preco: 40,
  },
];

const balancete = pedidos.reduce((total, element) => {
  return total + element.preco;
}, 0);
console.log(balancete);
