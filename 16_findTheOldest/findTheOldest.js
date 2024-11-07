const findTheOldest = function (people) {
    // use JavaScript's Date function to get age of undefined death-date entries
    const oldest = people.sort((a, b) => {
        let nextAge;
        let lastAge;

        let currDate = new Date

        if ("yearOfDeath" in a) {
            lastAge = a.yearOfDeath - a.yearOfBirth
        } else {
            lastAge = currDate.getFullYear() - a.yearOfBirth
        }

        if ("yearOfDeath" in b) {
            nextAge = b.yearOfDeath - b.yearOfBirth
        } else {
            nextAge = currDate.getFullYear() - b.yearOfBirth
        }

        return lastAge > nextAge ? -1 : 1;
    });
    console.table(oldest)

    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
