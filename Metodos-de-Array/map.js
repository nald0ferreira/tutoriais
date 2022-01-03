//Map Exemplo 1 #############################

const numbers = [1, 4, 5, 9, 14, 23 ]

function doubleNumber(num){
    return num * 2
}

const doubleNumbers = numbers.map(doubleNumber)

console.log(doubleNumbers)

//Map Exemplo 2 #############################

const numbers = [1, 4, 5, 9, 14, 23 ]

const doubleNumbers = numbers.map(function (elem) {
    return elem * 2
})

console.log(doubleNumbers)

//Map Exemplo 3 #############################

const numbers = [1, 4, 5, 9, 14, 23 ]

const doubleNumbers = number.map( num => num *2)

console.log( doubleNumbers)


// Exemplo pratico 'Conversor Fahrenheit para Celsius

const fahrenheit = [ 0, 10, 30, 50 ]

const celsius = fahrenheit.map(function(temp){
    return (temp -32) * 5/9
})

