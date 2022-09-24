const findTheOldest = function(people) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    people.map(person => {
        if (person.yearOfDeath == undefined) person.yearOfDeath = currentYear; 
    });
    people.sort((a,b) =>((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
