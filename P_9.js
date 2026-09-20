function titleCase(str) {
    let words = str.split(" ");
    let new_words = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return new_words.join(" ");
}

let str = "hello world";
let result = titleCase(str);
console.log(result);