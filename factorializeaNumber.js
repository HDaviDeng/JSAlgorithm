/**
 * Return the factorial of the provided provided integer.
 * 
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * 
 * Factorials are often represented with the shorthand notation n!
 * 
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 
 * Only integers greater than or equal to zero will be supplied to the function.
 */

/**
 * Hint 1:
 * You know your solution should return 1 when the number passed to the function is 0 or 1. Also, the final value returned will be the product of all the numbers between 1 and the number (inclusive). If you initialize the value for the product to 1, then think how you could start at the given number and continue decrementing this number until a specific value while multiplying the product by the number at each step.
 * 
 * 
 * Recursive Solution
 * 
 * This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.
 * 
 * We can use that as an if in order to break the loop we're going to create using a recursive function. It will check if the number you gave the function is 0 (which would be the end of your factorial chain). Functions "end" when they return anything. In fact, all functions without an expliceit return statement will return undefined.
 * 
 * This is also why instead of having "finished", a function is always said to "have returned". And now this...
 * 
 * 
 * Understanding recursion
 * 
 * Recursion refers to a function repeating (calling) itself. In this case we are basically returning thee given number (i.e.5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The very function is going to run inside itself interesting, eh?
 * 
 * 
 * Understanding the flow
 * 
 * The first returned value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parethesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:
 * 
 * During the first execution of the function:
 * [num = 5]
 * 
 * Is 5 equal to 1 or 0? No -> Oki doki, let's continue...
 * 
 * Returns:
 * (5 _(second execution: 4 _(third execution: 3 _(fourth execution: 2 _fifth execution: 1))))
 * 
 * What it returns can be viewd as (5*(4*(3*(2*1)))) or just 5 * 4 * 3 * 2 * 1, and the function will return the result of that operation:120. Now, let's check what the rest of the executions do:
 * 
 * During the rest of the executions:
 * 
 * Second Execution: num = 5 - 1 = 4 -> is num 0 or 1? No
 * -> return the multiplication between 4 and the next result when num is now 4 - 1.
 * 
 * Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? No
 * -> return the multiplication between 3 and the next result when num is now 3 - 1. 
 * 
 * Fourth Execution: num = 3 - 1 = 2 -> is num 0 or 1? No 
 * -> return the multiplication between 2 and the next result when num is now 2 - 1.
 * 
 * Fifth Execution: num = 2 - 1 = 1 -> is num 0 or 1? Yep
 * -> return 1. And this is where the recursion stops because there are no more executions.
 */

//Solution 1
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}
factorialize(5);
/**
 * Code Explanation
 * Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.
 * For all numbers passed to the function which are greater than one, the simple for loop will increment i by one each iteration and recalculate product up to the value num.
 */

//Solution 2 (using recursion)
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);
/**
 * Code Explanation
 * Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow.
 */

//Solution 3
function factorialize(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}
factorialize(5);
/** 
 * Code Explanation
 * In this solution, we use Tail Recursion to optimize the memory use.
 * In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don't get the result of your calculation until you hace returned from every recursive call.
 * In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return(recursive-function params)).
 * In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.
 */

//Solution 4
function factorialize(num) {
    return num < 0 ? 1 :
    new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);  
}
factorialize(5);
/**
 * Code Explanation
 * 
 * In this solution, we used "reduce" function to find the factorial value of the number.
 * 
 * We have created an array which has length num. And we filled all elements of the array as undefined. In this case, we have to do this because empty arrays couldn't refucible. You can fill the array as your wish by the way. This depends on your engineering sight completely.
 * 
 * In reduce function's accumulator is calling product this is also our final value. We are multiplying our index value with the product to find factorial value.
 * 
 * We're setting product's initial value to 1 because if it was zero products gets zero always.
 * 
 * Also the factorial value can't calculate for negative numbers, first of all, we're testing this.
 */