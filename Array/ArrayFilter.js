const pedidos = [
  {
    id: 1,
    nome: "sanduiche combo z",
    alimento: "sanduiche",
    bebida: "suco de manga",
  },
  {
    id: 2,
    nome: "pizza",
    alimento: "pizza",
    bebida: "suco de laranja",
  },
  {
    id: 3,
    nome: "lasanha",
    alimento: "carne, macarrao",
    bebida: "suco de abacaxi",
  },
];
const pedido = pedidos.filter((item) => {
  return item.bebida === "suco de abacaxi";
});
console.log(pedido);
