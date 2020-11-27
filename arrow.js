// function doubleIT(num)
// {
//     return num*5
// }

// const doubleIT = function(num){
//     return num*2;
// }

const doubleIT = num => num*2;
const add = (x,y) => x+y;

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result3 = sum * diff;
    return result3;
}

const result = doubleIT(50);
const result2 = add(4,5);
const result3 = doMath(45, 55);
console.log(result, result2, result3);