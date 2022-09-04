const repeatString = function(a, b) {
    if (b < 0) return 'ERROR';
    let output = "";
    for (let i = 0 ; i < b ; i++) {
        output += a;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
