const meuArray = [30,30,40,5,22,2015,3025,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return[...mySet];
}

console.log(valoresUnicos(meuArray));