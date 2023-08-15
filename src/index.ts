class Pessoa {
  nome: string;
  idade: number;

  constructor(nome:string ,idade:number){
    this.nome = nome;
    this.idade = idade;
  }

  imprimir() {
    console.log(`${this.nome} possui ${this.idade} anos`);
  }
}

const p = new Pessoa("Abner", 26);
const q = new Pessoa("Jessica", 29);
p.imprimir();
q.imprimir();

