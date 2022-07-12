// Map, Filter e Reduce
// Este repositório contém a atividade prática do Curso "Map, Filter e Reduce", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

// Atividades
// **Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.


function filtraPares(arr){
    return arr.filter((item) => item%2 === 0)
}

const meuArr = [1,2,4,7,10,16]

console.log("Os numeros pares do array são ", filtraPares(meuArr))