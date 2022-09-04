const reverseString = function(input) {
    let output = "";
    let counter2 = -1;
    /*
    for (let i=0;i<input.length;i++) {
        if (i == 0) {
            output += input.slice(counter2);
        }
        output += input.slice(counter2, counter2+1);
        --counter2;
    }
    */
   for (let i=input.length-1; i >= 0; i--) {
        output += input[i];
   }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
