class Filme{
    titulo: string;
    duracao: number;

    constructor(titulo:string, duracao: number){
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print():void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
}

const p = new Filme("De volta para o fututo", 116);
const q = new Filme("Matrix", 136);
p.print();
q.print();
