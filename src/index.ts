class Pessoa {
  nome: string;
  idade: number;

  constructor(a:string ,b:number){
    this.nome = a;
    this.idade = b;
  }

  imprimir() {
    console.log(`${this.nome} possui ${this.idade} anos`);
  }
}

const p = new Pessoa("Abner", 26);
const q = new Pessoa("Jessica", 29);
p.imprimir();
q.imprimir();

