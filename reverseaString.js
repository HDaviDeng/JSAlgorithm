//Reverse the provided string and return the reversed string.
//For example, "hello" should become "olleh".

/**
 * Hint:
 * We need to take the string and reverse it, so if it originally reads 'hello', it will now read 'olleh'.
 * One possible way to solve this challenge is by creating a new string (initializing it to a blank string "") and then iterating the string starting from the last character through the first character and the concatenating each character to the new string. After iterating through all the characters in the string, you return the new string.
 */

//Solution 1
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
/**
 * Code Explanation
 * Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
 * During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
 * Finally, you return the final value of reversedStr.
 */

//Solution 2
function reverseString(str) {
    return str  
        .split("")
        .reverse()
        .join("");
}
/**
 * Code Explanation
 * Our goal is to take the input, str, and return it in reverse. Our first strp is to split the string by characters using split(''). Notice that we don't leave anything in between the single quotes, this tells the function to split the string by each character.
 * Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.
 * Next we chain the reverse() function, which takes our array of characters and reverses them.
 * Finally, we chain jpoin('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.
 */