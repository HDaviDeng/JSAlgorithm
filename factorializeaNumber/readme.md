Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Hints

You know your solution should return 1 when the number passed to the function is 0 or 1. Also, the final value returned will be the product of all the numbers between 1and the number(inclusive). If you initialize the value for the product to 1, then think how you could start at the given number and continue decrementing this number until a specific value while multiplying the product by the number at each step.

Recursive Solution

This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.

We can use that as an if in order to break the loop we're going to createusing a recursive function. Ut will check if the number you gave the function is 0 (which would be the end of your factorial chain). Functions "end" when they return anythging. In fact, all functions without an explicit retuen statement will return undefined.

This is also why instead of having "finished", a function is always said to "have returned". And now this..

Understanding recursion

Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The vary function is going to run inside itself interesing, eh?

Understanding the flow

The first returned value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

During the first execution of the function:

[num = 5]

Is 5 equal to 1 or 0? No -> Oki doki, let's continue..

Returns:

(5_(second execution:4_(third execution:3(fourth execution:2_fifth execution:1))))

What it returns can be viewed as(5*(4*(3*(2*1)))) or just 5*4*3*2*1, and the function will return the result of that operation: 120. Now let's check what the rest of the executions do:

During the rest of the executions:

Second Execution: num = 5-1 =4 -> is num 0 or 1? No -> return the multiplication between 4 and the next result when num is now 4-1.

Second Execution: num = 4-1 =3 -> is num 0 or 1? No -> return the multiplication between 3 and the next result when num is now 3-1.

Second Execution: num = 3-1 =2 -> is num 0 or 1? No -> return the multiplication between 2 and the next result when num is now 2-1.

Second Execution: num = 2-1 =1 -> is num 0 or 1? Yes -> return 1. And this is where the recursion stops because there are no more executions.