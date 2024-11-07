const palindromes = function (input) {
    const stripped = input.replace(/\W/g, '').toLowerCase().split('');

    const len = stripped.length

    console.log(stripped)

    for (let i = 0; i < len; i++) {
        if (stripped[i] != stripped[len - 1 - i]) {
            return false
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
