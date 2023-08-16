class Carro {
  marca: string = "";
  modelo: string = "";
  setMarca(marca: string): void {
    this.marca = marca;
  }
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
const carro2 = new Carro();
carro2.marca = "Fiat";
carro2.modelo = "Uno";
carro.print();
carro2.print();