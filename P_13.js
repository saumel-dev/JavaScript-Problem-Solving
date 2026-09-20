function removeDuplicates(arr) {
    return arr = arr.filter((num, index) => arr.indexOf(num) === index);
}

let new_array = removeDuplicates([1, 2, 2, 3, 3, 4]);
console.log(new_array);