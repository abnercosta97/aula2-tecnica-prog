class Pessoa {
  nome: string = "Ana";
  idade: number = 22;

  imprimir() {
    console.log(`${this.nome} possui ${this.idade} anos`);
  }
}

const p = new Pessoa();
p.nome = "Abner";

const q = new Pessoa();
q.nome = "Rodrigo";

p.imprimir();
q.imprimir();

