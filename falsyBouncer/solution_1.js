function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
}

// We create a new empty array (filteredArr).
// We uses a for cycle to iterate over all elements of the provided array(arr).
// We use the if statement to check if the current element is truthy or falsy.
// If the element is truthy, we push it to the new array (newArray). This result in the new array(filteredArr) containing only truthy elements.
// We return the new array(filteredArr).