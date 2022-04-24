function filtraPares(arr){
    return arr.filter(callback)
}

function callback (item){
    return item % 2 === 0;
}

const meuArray = [1,23,52,35,55,41];

console.log(filtraPares(meuArray));
