class Pessoa {
  private Nome: string;
  private Sobrenome: string;
  private Idade: number;

  public NomeCompleto() {
    return `${this.Nome} ${this.Sobrenome}`;
  }

  constructor(nome: string, sobrenome: string, idade: number) {
    this.Nome = nome;
    this.Sobrenome = sobrenome;
    this.Idade = idade;
  }
}
class Jose extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number) {
    super(nome, sobrenome, idade);
  }
}
const pessoa1 = new Pessoa("José", "Guilherme", 22);
console.log(pessoa1.NomeCompleto());
