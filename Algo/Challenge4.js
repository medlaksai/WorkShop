function linearSearch(array, q) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === q) {
      return console.log("Match Found");
    }
  }
  return console.log("Match Not Found");

}
let array = [9,6,5,4,3,2,1]
linearSearch(array,200)

