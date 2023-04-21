//Return the provided string with the firstletter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like the and of.

//Problem Explanation: We have to return a sentence with title case. This means that the first letter will always be in uppercase and the rest will be in lowercase.

/**
 * Hint 1: You could start by splitting the string into an array of words.
 * 
 * Hint 2: You should make the word lowercase and make the first letter uppercase.
 * 
 * Hint 3: You will need to create a new string with pieces of the updated words.
 */

//Solution 1
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] =newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
//Code Explanation: Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn the first character of the word to uppercase and the rest to lowercase. By creating concatenated string composed of the whole word in lowercase with the firs character replaced by its uppercase.

//Solution 2
function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map (val => val.replace(cal.charAt(0), cal.charAt(0).toUpperCase()))
        .join(" ");
}
titleCase("I'm a little tea pot");
//Code Explanation: We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercasee character with uppercase. Finally, we are returning the string using join method.

//Solution 3
function titleCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
/**
 * Code Explanation
 * 
 * The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.
 * 
 * Lowercase the whole string using str.toLowerCase().
 * Replace ecery word's first character to uppercase using.replace.
 * Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
 * 
 * Regex Explanation:
 * Find all non-whitespace characters (\S)
 * At the beginning of string (^)
 * Or after any whitespace character (\s)
 * 
 * The g modifier searches for other such word pattern in the whole string and replaces them
 * This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // → ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // → ‘Località Àtilacol’
 */