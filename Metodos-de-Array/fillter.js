const novoArray = [1, 1, 4, 5, 5, 9, 14, 14, 23 ]

const valoresUnicos = novoArray.filter( ( elem, index, arr) => arr.indexOf(elem) === index )
