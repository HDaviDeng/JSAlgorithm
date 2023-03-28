function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

//Use spread operators with slice to return an array.

//First spread operator uses the slice method to only give the portion of arr2 from index 0 to 'n'.

//Second spread operator passes all elements from arr1.

//Third spread operator uses the slice method to return all elements starting at index'n' to the end of the array.