//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Problem Explanation: We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.

/**
 * Hint 1: String are immutable in JavaScript so we will need a new variable to store the truncated string.
 * 
 * Hint 2: You will need to use the slice() method and specify where to start and where to stop.
 */

//Solution 1
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
/**
 * Code Explanation
 * 
 * We start off with a simple if statement to determine one of two outcomes..
 * 
 * If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
 * 
 * However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
 */

//Solution 2
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
/**
 * Code Explanation
 * This solution is very similar to basic solution. To determine the new string, we use a ternary operator. In our ternary operation, if str.length is larger than num, we return a new string which is slice of our string starting at character 0, and ending at num and the '...' is appended to the end of our new string. If str.length is less than or equal to num, we return the string without any truncation.
 * NOTE In order to understand the aboce code, you need to understand how a Ternary Operator words. The Ternary Operator is frequently used as a shortcut for the if statement and fowllows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.
 */