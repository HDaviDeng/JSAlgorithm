/**
 * Remove all falsy values from an array. Return a new array; do not mutate the original array.
 * 
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * 
 * Try covering each value to a Boolean.
 */

/**
 * Hint 1: Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.
 * 
 * Hint 2: We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values..
 * 
 * Hint 3: Then we need to add a filter() with the falsy values function..
 */

//Solution 1:
function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
}
/**
 * Code Explanation
 * We create a new empty array(filteredArr).
 * We use a for cycle to iterate over all elements of the provided array (arr).
 * We use the if statement to check if the current elements is truthy or falsy.
 * If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
 * We return the new array (filteredArr).
 */

//Solution 2:
function bouncer(arr) {
    return arr.filter(Boolean);
}
//Explanation: The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value of false for falsy value. Hence we pass the built-in Boolean function.