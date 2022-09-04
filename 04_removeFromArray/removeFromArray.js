const removeFromArray = function(array,element) {
    let index = array.indexOf(element);
    // let newArray = array.splice(index,1);
    array.splice(index,1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
