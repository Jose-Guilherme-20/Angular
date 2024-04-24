abstract class Person {
  private Nome: string;
  private Sobrenome: string;
  private Idade: number;

  public NomeCompleto() {
    return `${this.Nome} ${this.Sobrenome}`;
  }
  protected abstract profissao: string;
  get nome() {
    return this.Nome;
  }
  set nome(nome: string) {
    this.Nome = nome;
  }

  constructor(nome: string, sobrenome: string, idade: number) {
    this.Nome = nome;
    this.Sobrenome = sobrenome;
    this.Idade = idade;
  }
}
class Joao extends Person {
  protected profissao: string;
  constructor(nome: string, sobrenome: string, idade: number, prof: string) {
    super(nome, sobrenome, idade);
    this.profissao = prof;
  }
}
const person1 = new Joao("José", "Guilherme", 22, "Tatuador");
console.log(person1.NomeCompleto());
const person2 = new Joao("João", "vitor", 16, "Pedreiro");
console.log(person2.nome);
