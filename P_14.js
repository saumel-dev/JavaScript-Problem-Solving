// method 1
// let arr = [1, [1, 2], [1, 2, 3]];
// console.log(arr.flat());

// method 2
// function flattenArray(arr) {
//     return arr.reduce((acc, item) => {
//         return acc.concat(item);
//     }, [])
// }
// console.log(flattenArray([1, [1, 2], [1, 2, 3]]));