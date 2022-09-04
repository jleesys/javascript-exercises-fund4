const leapYears = function() {
    const arrayArgs = Array.from(arguments);
    let input = arrayArgs[0];

    // if not divisible by 4, it is NOT a leap year
    if ( input % 4 != 0 ) return false;
    // if divisible by 400 then it is a leap year
    if ( input % 400 == 0 ) return true;
    // if it is divisible by 100 then it is not a leap year
    if ( input % 100 == 0 ) return false;
    if ( input % 4 == 0) return true;


    return false;


};

// Do not edit below this line
module.exports = leapYears;
