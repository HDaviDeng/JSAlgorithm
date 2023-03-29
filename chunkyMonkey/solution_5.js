function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(
            chunkArrayInGroups(arr.slice(size), size)
        );
    }
}

//Array smaller than size is returned nested.
//For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.