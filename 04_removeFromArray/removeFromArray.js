const removeFromArray = function (array, ...exclude) {
    result = []

    for (let i = 0; i < array.length; i++) {
        // Copy elements from the input array to the result array excluding
        // the values provided in the function call
        if (!(exclude.includes(array[i]))) {
            result.push(array[i])
        }
    }

    // console.log(result)

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
