let array = [10 , 7 , 4 , 9 , 1 , 12]
let arraysorted = []
let n = array.length

for (let i = 0 ; i < n ; i++){
    let ss = array[i]
    let j = i - 1
 while(j >= 0 && array[j] > ss){ 
    array[j+1] = array[j]
    j--
}
array[j+1] = ss
}
       
console.log(array)

