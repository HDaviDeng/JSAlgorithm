//Repeat a given string str(first argument) for num times(second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.\

/**
 * The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.
 * 
 * Hint 1: The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.
 * 
 * Hint 2: You can't edit strings, you will need to create a variable to store the new string.
 * 
 * Hint 3: Create a loop to repeat the code as many times as needed.
 * 
 * Hint 4: Make the variable created store the current value and append the word to it.
 */

//Solution 1
function repeatStringNumTimes(str, num){
    let accumulatedStr = "";

    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }
    return accumulatedStr;
}
/**
 * Code Explanation
 * Create an empty string variable to store the repeated word.
 * Use a for loop to repeat code as many times as needed according to num
 * Then we add the string to the variable created on step one inside of the loop
 * At the end of the loop, return the variable for the repeated word.
 */

//Solution 2
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num-1);
    }
}
/**
 * Code Explanation
 * This solution uses recursion.
 * We check if num is negative and return an empty string if true.
 * If not, we add the string to a call of our function with num being decreased by1, which will add another str and another... until eventually num is 1. And return that whole process.
 */

//Solution 3 (Recursive Solution)
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}