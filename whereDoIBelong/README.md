Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index0), but less than 2 (index1).

Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index2) and greater than 5(index1).


This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.
Hint1:
The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.
Hint2:
Once the array is sorted, then just check for the first number that is bigger and return the index.
Hint3:
If there is no index for that number then you will have to deal with that case too.