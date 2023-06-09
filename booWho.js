//Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
//This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

/**
 * Hint 1: You will need to check for the type of the parameter to see if it is a boolean.
 * 
 * Hint 2: To check for the type of a parameter, you can use typeof.
 * 
 * Hint 3: Since you must return true or false you can use if statements or just have it return the boolean used for the if statement.
 */

//Solution 
function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);
//Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.