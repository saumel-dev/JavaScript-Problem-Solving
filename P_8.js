let s = "hello";
let result = s.split("").reverse().join("");
if(s === result) {
    console.log("The string is a palindrome");
}
else {
    console.log("The string is not a palindrome");
}