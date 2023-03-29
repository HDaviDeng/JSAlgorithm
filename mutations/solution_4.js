function mutation([elem1, elem2]) {
    const regex = new RegExp(`[^${elem1}]`, 'i');
    return !regex.test(elem2);
}

//Desconstruct the two elements of the array passed to the function and create a regular expression using the RegExp() constructor using a negated character set of all the first element's characters. Adding the i flag makes the match case insensitive. The function returns the negated Boolean value of testing the regex with element two's characters.