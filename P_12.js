function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i]);
    }
    return max;
}
let result = findMax([3, 1, 7, 2, 9]);
console.log(result);