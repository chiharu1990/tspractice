export default {};
// 正規表現testメソッド
// const r = /ab+c/;

// console.log(r.test("abbbbc")); //true
// console.log(r.test("Hello, abc World")); //true
// console.log(r.test("ABC")); //false
// console.log(r.test("こんにちは")); //false

// ^は文字列の先頭を意味する
const r = /^abc/;
console.log(r.test("abcdefg")); //true
console.log(r.test("Hello, abcdefg")); //false