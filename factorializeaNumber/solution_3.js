function factorialize(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

factorialize(5);

//In this solution, we use Tail Recursion to optimize the memory use.

//In traditional head recursion, the typical model is that you perform your recursive calls fiest, and then you take the return value of the recursive call and calculate the result. In this manner, you don't get the result of your calculation until you have returned from every recursive all.

//In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).

//In this solution, with each evaluation of the recursive call, the factorial is updated. This is different form the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.