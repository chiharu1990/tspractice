export default {};
// 文字列リテラル
const str1: string = "Hello";
const str2: string = "world!";
console.log(str1 + "," + str2);
// テンプレートリテラル
// 特徴一、改行が可能
const message: string = `Hello,
world!`;
console.log(message);
// 特徴二、式を文字列の中に埋め込める
console.log(`${str1},${str2}`);

// 式は文字列型でなくても構わない
console.log(`123 + 456 = ${123 + 456}`); //123 + 456 = 579
