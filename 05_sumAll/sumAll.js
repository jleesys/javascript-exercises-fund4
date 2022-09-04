const sumAll = function (a, b) {
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
