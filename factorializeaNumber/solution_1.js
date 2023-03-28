function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *=i;
    }
    return product;
}

factorialize(5);

//Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.

//For all numbers passed to the function which are greater than one, the simple for loop will increment i by one each iteration and recalcutate product up to the value num.