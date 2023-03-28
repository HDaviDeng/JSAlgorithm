Slice and Splice

You are given arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.


We need to copy each element from the first array into the second array starting at the index n. We've also got to ensure that the original arrays are not mutated. That is we cannot make any changes to the original arrays.

Hint 1
Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

Hint 2
Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

Hint 3
Increment the index after performing the splice.