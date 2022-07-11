function filtraPares(arr){
    return arr.filter((item) => item%2 === 0)
}

const meuArr = [1,2,4,7,10,16]

console.log("Os numeros pares do array são ", filtraPares(meuArr))