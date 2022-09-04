const sumAll = function (a, b) {
    if ( a < 0 || b < 0
        || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    let sum = 0;
    let initial = a;
    let terminal = b;

    if ( a > b ) {
        initial = b;
        terminal = a;
    }

    // if ( a > b ) {
    // let c = a;
    // a = b; b = c;
    // }
    for (let i = initial; i <= terminal; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
