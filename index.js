// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let a = 0;
    let b = 1;
    console.log(0);
    console.log(1);
    for (let i = 2; i < n; i++) {
        let c = a+b;
        console.log(c);
        a = b;
        b = c;
    }
}

printFibonacci(5);  // should print 0, 1, 1, 2, 3
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
