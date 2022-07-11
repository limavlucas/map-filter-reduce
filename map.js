// Map sem usar thisArgs

const meuArr = [1 , 3 , 5 , 7];

function mapSemThis(arr){
    return arr.map((numero) => numero*2);
}

console.log(mapSemThis(meuArr))


// Map usando thisArg

const kiwi = {
    value : 2,
};

const morango = {
    value : 4,
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2]

console.log("this -> morango ", mapComThis(nums,morango))
console.log("this -> kiwi ", mapComThis(nums,kiwi))