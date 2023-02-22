function incrementJuros(valor, percentual){
    const valorAcrecimo = (percentual / 100) * valor;
    return valor + valorAcrecimo;
}
console.log(incrementJuros(100,30));
console.log(incrementJuros(100,15));