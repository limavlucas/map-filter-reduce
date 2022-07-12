// Map, Filter e Reduce
// Este repositório contém a atividade prática do Curso "Map, Filter e Reduce", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

// Atividades
// **Reduce
// Some todos os números de um array
// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.


function somaNumeros(arr){
    return arr.reduce((anterior, atual) => anterior + atual);
}

const meuArr = [0,1,2,3,4]; 

console.log(somaNumeros(meuArr));



// lista de compras com reduce

function subtraiPreços(lista, saldoDisp){
    return lista.reduce((anterior, atual) => anterior - atual.preco, saldoDisp)
}

const listaCompras = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco:12
    },
    {
        name: 'toalha',
        preco: 30
    }
]
const saldo = 120;

console.log(subtraiPreços(listaCompras, saldo));