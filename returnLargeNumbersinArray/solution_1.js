function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[1].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}

//Create a variable to store the results as an array.
//Create an outer loop to iterate through the outer array.
//Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won't be reassigned until we find a large number.
//Create said inner loop to work with the sub-arrays.
//Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
//After the inner loop, save the largest number in the corresponding position inside of the results array.
//And finally return said array.