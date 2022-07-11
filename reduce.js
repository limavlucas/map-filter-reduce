// function somaNumeros(arr){
//     return arr.reduce((anterior, atual) => anterior + atual);
// }

// const meuArr = [0,1,2,3,4]; 

// console.log(somaNumeros(meuArr));

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