function findLongestWordLength(str) {
    //split the string into individual words
    const words = str.split(" ");

    //words only has 1 element left that is the longest element
    if (words.length == 1) {
        return words[0].length;
    }

    //if words has multiple elements, remove the first element
    //and recursively call the function
    return Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
    );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//The fiest line splits the string into individual words. Then we check if words only has 1 element left. If so, then that is the longest element and we return it. Otherwise, we removed the first element and recursively call the function findLongwstWord, returing the maximum between the length of the first result and the recursive call.