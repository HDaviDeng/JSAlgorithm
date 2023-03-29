Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


Hints

Our goal for this Algorithm is to split arr(first argument) into smaller chunks of arrays with the length provided by size(second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

1. (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
2. ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
3. ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
4. ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

Hint 1:
The links above suggest to use Array.push(), so let's start by first creating a new array to store the smaller arrays we will soon have like this:
var newArray = [];

Hint 2:
Next we'll need a for loop to loop through arr.

Hint 3:
Finally, we need a method to do the actual splitting and we can use Array.slice() to do that. The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.push() all work together.