function isVowel (ch) {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') return true;
    return false;
}
let s = "javascript";
let cnt = 0;
for(let i = 0; i < s.length; i++)
{
    if(isVowel(s[i]))
    {
        cnt++;
    }
}
console.log(cnt);