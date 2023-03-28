function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");


//If a negative number is provided as the first parameter to slice(), the offset is taken backwards from the end of the string.