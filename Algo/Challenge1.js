let array = [10 , 7 , 4 , 9 , 1 , 12]
let arraysorted = []
let n = array.length



console.log(array)

for (let i = 0 ; i < n  ; i++){
    for (let j = i + 1 ; j < n  ; j++){
       if (array[i] > array[j]){  
        let sort = array[i]
        array[i] = array[j]
        array[j] = sort
        }
    }
}
console.log(array)