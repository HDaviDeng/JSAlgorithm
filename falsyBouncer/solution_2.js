function bouncer(arr) {
    return arr.filter(Boolean);
}

// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value of false for falsy value. Hence we pass the built-in Boolean function.