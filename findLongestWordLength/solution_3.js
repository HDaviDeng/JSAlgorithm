//Using .reduce()

function findLongestWrodLength(s) {
    return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//In case you are wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.