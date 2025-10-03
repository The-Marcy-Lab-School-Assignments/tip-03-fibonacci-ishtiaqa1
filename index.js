// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let arr = [0,1];
    console.log(0);
    console.log(1);
    for (let i = 2; i < n; i++) {
        arr.push(Math.abs(arr[i-1] + arr[i-2]));
        console.log(arr[i]);
    }
}

printFibonacci(5);  // should print 0, 1, 1, 2, 3
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
