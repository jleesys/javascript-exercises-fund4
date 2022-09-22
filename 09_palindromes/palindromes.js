const palindromes = function (input) {
    input = input.trim().toLowerCase();
    let inputAsArray = Array.from(input);
    let newArray = [];
    for (let i = 0; i < inputAsArray.length; i++) {
        if (isLetter(inputAsArray[i])) newArray.push(inputAsArray[i]);
    }

    return newArray.join() == newArray.reverse().join();

};

function isLetter(string) {
    if ((string.length == 1) && (string.match(/[a-z]/i))) {
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = palindromes;
