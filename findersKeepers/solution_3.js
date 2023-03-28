function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

//Look through the array given in the 1st paramater "arr" using the .map() method.

//Use the function in the 2nd parameter as the callback function in arr.map()

//Acquire the index of the first number that meets the condition in the function.

//Use that index to display the first avalable number that meets the condition.