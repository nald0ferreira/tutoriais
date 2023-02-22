function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return  'Peso Normal'
    }else{
        return 'Imc fora 2'
    }
}


// Main
(function (){
    const peso = 77;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();



