//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

/**
 * Problem Explanation
 * 
 * Our goal for this Algorithm is to split arr(first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) out code needs to pass in orger to complete this Algorithm:
 * (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
 * ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
 * ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
 * ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
 */

/**
 * Hint 1: The links above suggest to use Array.push(), so let's start by first creating a new array to store the smaller arrays we will soon have like this:
 * ver newArray = [];
 * 
 * Hint 2: Next we'll need a for loop to loop through arr.
 * 
 * Hint 3: Finally, we need a method to do the actual splitting and we can use Array.slice() to do that. The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.puth() all work together.
 */

//Solution 1
function chunkArrayInGroups(arr,size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = []
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
}
/**
 * Firstly, we create two empty arrays called temp and result, which we will eventually return.
 * Our for loop loops until a is equal to or more than the length of the array in our test.
 * Inside our loop, we push to temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
 * Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
 * Next, if temp isn't an empty array, we push it to result.
 * Finally, we return the value of result.
 */

//Solution 2
function chunkArrayInGroups(arr, size) {
    //Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
/**
 * First, we create an empty array newArr where we will store our 'chunks'.
 * The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
 * Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
 * Unside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
 * We add this chunk/slice to newArr with newArr.push().
 * Finally, we return the value of newArr once the for loop is complete.
 */

//Solution 3
function chunkArrayInGroups(arr, size) {
    const newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}
/**
 * Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.
 * Our while loop loops until i is equal to or more than the length of the array in our test.
 * Inside our loop, we push to the newArr array using arr.slice(i, i+size). for the first time it loops, it will look something like: newArr.push(arr.slice(1, 1+2))
 * After we push to newArr, we add the variable of size onto i.
 * Finally, we return the value of newArr.
 */

//Solution 4
function chunkArrayUnGroups(arr, size) {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
/**
 * Firstly, we create a variable. newArr is an empty array which we will push to.
 * Our while loop loops until the length of the array in our test is not 0.
 * Inside our loop, we push to the newArr array using arr.splice(0, size).
 * For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
 * Finally, we return the value of newArr.
 */

//Solution 5
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(
            chunkArrayInGroups(arr.slice(size), size)
        );
    }
}
//Array smaller than size is returned nested.
// For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.