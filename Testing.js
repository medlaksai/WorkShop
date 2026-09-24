let array = [10, 9, 7, 13, 7, 9, 4]

let max = array[0]
let SecondMax = []
let double = []


for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        SecondMax = max
        max = array[i]
    }else if (SecondMax < array[i] && array[i] < max){
        SecondMax = array[i]

    }
}
let i = 0
for (let i = 0 ; i < array.length ; i++){
    for(let j = i+1 ; j < array.length ; j++){
        if (array[i] === array[j]){
            double.push(array[i])
       } 
    }
}


console.log(max);
console.log(SecondMax);
console.log(double)
