/*function meuNome(nome){
    console.log(`Meu nome é ${nome}`)
}
meuNome('Ednaldo do Nascimento');


function verificarIdade(idade){
    if(idade >= 18){
        console.log('Maior');
    }else{
        console.log('Menor')
    }
}
verificarIdade(25);
verificarIdade(17);
*/


/*
let verificarIdade = idade =>{ if(idade >= 18){return 'Maior'} else{return 'Menor'}}
verificarIdade();
*/

/* Formas de pagamento
    À vista, recebe 10% de desconto;
    À vista, no dinheiro ou pix recebe 15% de desconto;
    Em 2X, preço normal de etiqueta;
    Acima de 2x, preço de etiqueta mais juros de 10%;
*/

let valorFinal = (preco, formaPagamento) =>{
    let valor = preco;
    if(formaPagamento == 1){
         valor = preco * 0.9
    }else if(formaPagamento == 2){
        valor = preco * 0.85
    }else if(formaPagamento == 4){
        valor = preco * 1.1
    }
    return `Valor a pagar é R$ ${valor} `
}
valorFinal(100, 2);