function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

//Since our goal is to return the new array without altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function.

//Since the splice() function will mutate(alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won't be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ...

// localArr is returned and the function is complete.