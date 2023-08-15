class Pessoa {
    nome: string = "Ana";
    idade: number = 22;
    
    imprimir(){
        console.log( this.nome, this.idade);
    }
}

const p = new Pessoa();
p.imprimir();
p.nome = "Abner";
p.imprimir();

