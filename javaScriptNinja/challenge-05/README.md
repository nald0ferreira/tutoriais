```js

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ['Brasil', 'Alemanha', 'Chile', 'Peru', 'China'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna(){
    return myVar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retorna(myVar[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function params(myVar,b){
    return myVar[b];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
 var pessoa = ['Ednaldo', 77, 1.75, false, 'Caçapava'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funtion retorna (){
    return pessoa[5];
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    let livros {
        O Abapuru: {
            quantidadePaginas: 300,
            autor: 'Machado de Assis',
            editora: 'Salvat',
        },
        O Rio de Fogo: {
            quantidadePaginas: 234,
            autor: 'Livia Hummate',
            editora: 'Estante',
        },
        Vozes Vivas: {
            quantidadePaginas: 250,
            autor: 'Ulisse Caimbre',
            editora: 'Moderna',
        }

    }
    if(nomeLivro !== null){
        return nomeLivro
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?