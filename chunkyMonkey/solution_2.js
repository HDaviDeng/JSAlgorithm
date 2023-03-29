function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i +=size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

// First, we create an empty array newArr where we will store our 'chunks'.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
// We add this chunk/slice to newArr with newArr.push()
// Finally, we return the value of newArr once the for loop is complete.