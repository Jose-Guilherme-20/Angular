const arr: [string, number, boolean] = ["José", 22, true];

const arr1: Array<string | number | boolean> = ["José", 22, true];

const obj: { nome: string; idade: number; maiorIdade: boolean } = {
  nome: "José",
  idade: 22,
  maiorIdade: true,
};

const obj1: Array<{ nome: string; idade: number; maiorIdade: boolean }> = [
  {
    nome: "José",
    idade: 22,
    maiorIdade: true,
  },
  {
    nome: "José1",
    idade: 32,
    maiorIdade: true,
  },
  {
    nome: "José2",
    idade: 17,
    maiorIdade: false,
  },
];

console.log(arr);
console.log(arr1);
console.log(obj);
console.log(obj1);
