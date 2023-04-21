/**
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Retuen the resulting array. The input arrays should remain the same after the function runs.
 * 
 * Code Explanation:
 * We nee to copy each element from the first array into the second array starting at the index n. We've also got to ensure that the original arrays are not mutated. That is we cannot make any changes to the original arrays.
 */

/**
 * Hint 1: Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.
 * 
 * Hint 2: Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.
 * 
 * Hint 3: Increment the index after performing the splice.
 */

//Solution 1
function frankenSplice(arr1, arr2, n) {
    //It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}
/**
 * Code Explanation
 * 
 * Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
 * 
 * Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
 * 
 * Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
 * 
 * We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
 * 
 * Finally, we return the localArray and end the function.
 */

//Solution 2
function frankenSplice(arr1, arr2, n) {
    let localArr =arr2.slice()
    localArr.splice(n, 0, ...arr1);
    return localArr;
}
/**
 * Since our goal is to return the new array without altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function
 * 
 * Since the splice() function will mutate(alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won't be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ...
 * 
 * localArr is returned and the function is complete.
 */

//Solution 3
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
/**
 * Use spread operators with slice to return an array.
 * 
 * First spread operator uses the slice method to only give the protion of arr2 from index 0 to 'n'.
 * 
 * Second spread operator passes all elements from arr1.
 * 
 * Third spread operator uses the slice method to return all elements starting at index'n' to the end of the array.
 */