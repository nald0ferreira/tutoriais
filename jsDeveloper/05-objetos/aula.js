const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function (){
        return `Meu nome é ${this.nome} e minha idade é ${this.idade}`;
        
    }

}
console.log(pessoa.descrever());