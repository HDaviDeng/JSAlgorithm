//Recursive

function mutation([ target, test ], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
        ? true
        : !target.includes(test[i])
            ? false
            : mutation([ target, test ], i + 1);
}

//Note that nesting ternaris this deeply is typically not recommended in professional code.