
function fib(n3) {
    let num1  = 0;
    let num2 = 1;
    for (let i = 3; i <= 10; i++) {
        let num3 = num1 + num2
        console.log(num3)
        num1 = num2
        num2 = num3
    }
    return n3;
}
console.log(fib(10));
