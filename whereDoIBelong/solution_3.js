//Using .findIndex()

function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
        .sort((curr, next) => curr - next)
        .findIndex(currNum => num <= currNum);
    //Returns index or total length of arr
    return inex === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

// First sort the array in ascending order, this is currently done using array functions for minimal footprint.
// Once the array is sorted, we directly apply the .findIndex() where we are going to compare every element in the array until we find where num <= currNum -where the number we want to insert is less than or equal to the current number in the iteration.
// Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index was not found, meaning when we get a false for all elements in the array, and for such case, it would mean that num should be inserted at the end of the list. Hence, why we use arr.length.