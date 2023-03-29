function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i=0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}

//First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.

//Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number that the number we are comparing against, then we return the index.