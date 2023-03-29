Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoreing case.

The arguments["hello", "hey"]should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.



Return true if the string in the first elementof the array contains all of the letters of the string in the second element of the array...

Hint1:
If everything is lowercase it will be easier to compare.

Hint2:
Our string might be easier to work with if they were arrays of characters.

Hint3:
A loop might help. Use indexOf() to check if the letter of the second word is on the first.