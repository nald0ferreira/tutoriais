class Carros{
    marca;
    cor;
    kmLitro;

    constructor(marca, cor){
        this.marca = marca;
        this.cor = cor;
        this.kmLitro = this.kmLitro;
    }



}

function consumo(kmRodado, preco){
    let media = kmRodado * preco;
    console.log(media);
}

Carros.prisma = new Carros('GM', 'Prata', 10);
Carros.corsa = new Carros('GM', 'Verde', 9);

console.log(Carros.prisma);