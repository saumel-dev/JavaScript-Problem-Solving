// let a = "banana";
// let cnt = 0;
// for(let i = 0; i < a.length; i++) {
//     if(a[i] === "a") {
//         cnt++;
//     }
// }
// console.log(cnt);

function countChar(str, char) {
    return str.split(char).length - 1;
}
let result = countChar('hello world', 'l');
console.log(result);