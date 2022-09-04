const removeFromArray = function (array, element) {
    let arrayArgs = [...arguments];
    for (let i = 1; i < arguments.length; i++) {
        let index = array.indexOf(arrayArgs[i]);
        if (index == -1) {
            continue;
        }
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
