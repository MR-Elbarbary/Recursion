function fib(n, arr = [0, 1]) {
    if (n <= 2) {
        return arr.slice(0, n);
    }
    fib(n - 1, arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fib(8));