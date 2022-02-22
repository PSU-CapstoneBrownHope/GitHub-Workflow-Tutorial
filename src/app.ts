
// Calculate the factorial of the number n recursively
function factorialRec(n: number): number {
    if (n == 1)
        return 1;

    return n * factorialRec(n - 1);
}

console.log(factorialRec(5));