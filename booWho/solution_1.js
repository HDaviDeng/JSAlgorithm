function booWho(bool) {
    return typeof bool === "boolean";
}

//test here
booWho(null);

//Uses the operator typeof to check if the cariable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.