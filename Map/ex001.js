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



