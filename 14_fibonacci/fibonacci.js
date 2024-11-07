const fibonacci = function (num) {

    if (num < 0) {
        return "OOPS"
    }

    result = 0;

    prev1 = 1;

    prev2 = 1;

    if (num == 1 || num == 2) {
        return 1;
    }

    for (let i = 2; i < num; i++) {
        result = prev1 + prev2;
        prev1 = prev2;
        prev2 = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
