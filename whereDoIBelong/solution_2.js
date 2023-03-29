function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

//Count the number of entries that are smaller than the new value num.
//The new value would be inserted agter these values