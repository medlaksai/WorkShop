const prompt = require(`prompt-sync`)()

let ask = Number(prompt("Enter how many elements: "))
let list = []

for (let i = 0; i < ask; i++) {
    let elm = Number(prompt(`element n°${i + 1}: `))
    list.push(elm)
}

let a = list[0]

for (let i = 1; i < list.length; i++) {
    if (a < list[i]) {
        a = list[i]
    }
}

console.log("Largest element is:", a)