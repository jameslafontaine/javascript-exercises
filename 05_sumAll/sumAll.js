const sumAll = function (num1, num2) {

    // Input validation
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) ||
        !Number.isInteger(num2)) {
        return "ERROR"
    }

    start = Math.min(num1, num2)
    end = Math.max(num1, num2)

    sum = 0



    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
