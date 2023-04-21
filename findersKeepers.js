// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test return undefined

//Problem Explanation: We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func).

/**
 * Hint 1: We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func). Looking through the array can be done with a for loop.
 * 
 * Hint 2: num is passed to the function. We will need to set it to the elements we want to check with the function.
 * 
 * Hint 3: Do not forget, if none of the numbers in the array pass the test, it should return undefined.
 */

//Solution 1
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
/**
 * Code Explanation
 * 
 * Challenge asks us to look through array. This is done using a for loop.
 * 
 * The num variable is being passed into the function, so we set it to each index in our array.
 * 
 * The pre-defined function already checks each number for us, so if it is "true", we return that num.
 * 
 * If none of the numbers in the array pass the function's test, we return undefined.
 */

//Solution 2
function findElement(arr, func) {
    return arr.find(func);
}

//Solution 3
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}
/**
 * Code Explanation
 * 1. Look through the array given in the 1st paramater "arr" using the .map()method.
 * 2. Use the function in the 2nd parameter as the callback function in arr.map()
 * 3. Acquire the index of the first number that meets the condition in the function.
 * 4. Use that index to display the first available number that meets the condition.
 */

//Solution 4 (Recursive Solution)
function findElement(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
        return findElement(arr.slice(1), func);
    } else {
        return arr[0];
    }
}