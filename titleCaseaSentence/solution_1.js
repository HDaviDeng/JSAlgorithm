function titleCasee(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

//Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn the first character of the word to uppercase and the rest to lowercase by creating concatenated string composed ot the whole word in lowercase with the first character replaced by its uppercase.