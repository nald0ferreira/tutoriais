class Pessoa {
    nome;
    idade;

    descrever(){
        return `Meu nome é ${this.nome} e minha idade é ${this.idade}`;
    }
}

const vitor = new Pessoa();
vitor.nome = "Vitor J Guerra";
vitor.idade = 25;

const renam = new Pessoa();
vitor.nome = "Renam J Paula";
vitor.idade = 30;

vitor.descrever();

