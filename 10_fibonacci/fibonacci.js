const fibonacci = function(input) {
    // checks for negative inputs, returning "OOPS" as defined in assignment
    if ( input < 1) return "OOPS";
    const index = input - 1;
    const fibArray = [];
    for (let i = 0; i <= index ; i++) {
        let x;
        if (i == 0) {
            fibArray.push(1);
            continue;
        }
        if (i < 2) { x = fibArray[i-1]; fibArray.push(x); continue }
        x = fibArray[i-1] + fibArray[i-2];
        fibArray.push(x);
    }
    return fibArray[index];
    // debug statement VVV
    // return fibArray;
};

/*
fibonacci sequence ex
> A series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
*/

// Do not edit below this line
module.exports = fibonacci;
