//Return the length of the longest word in the provided sentence. Your response should be a number.

/**
 * Problem Explanation
 * You have to go through each word and figure out which one is the longest and return the length of that word
 * 
 * Hint 1: You will need to loop through the words in the string.
 * Hint 2: You will need to figure out a way to keep track globally of the greatest current length.
 * Hint 3: Do you remember how to get the length of strings?
 */

//Solution 1
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }
    return longestLength;
}

//Solution 2
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
/**
 * Code Explanation
 * 
 * Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.
 * 
 * Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.
 */

//Solution 3 Using .reduce()
function findLongestWordLength(s) {
    return s
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}
/**
 * Code Explanation
 * 
 * In case you're wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.
 */


//Solution 4 Using .map()
function findLongestWordLength(str) {
    return Math.max(...str,split(" ").map(word => word.length));
}
/**
 * Code Explanation
 * 
 * We provide Math.max with the length of each word as argument, and it will simply return the highest of all.
 * 
 * Let's analyze everything inside the Math.max parenthesees to understand how we do that.
 * 
 * str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].
 * 
 * Then, we will make another array made from the lengths of each element of the str.split(" ") array with map().
 * 
 * str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]
 * 
 * Finally, we pass the array as argument for the Math.max function with the spread operator ...
 * 
 */

//Solution 5
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");

    //words only has 1 element left that is the longwst elemnt
    if (words.length == 1) {
        return words[0].length;
    }

    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
    );
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Code Explanation
//The first line splits the string into individual words. Then we check if words only has 1 element left. If so, then that is the longest element and we return it. Otherwise, we remove the first element and recursively call the function findLongestWord, returning the maximum between the length of the first result and the recursive call.