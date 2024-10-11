import { isContext } from "vm";

export default {};
// 問題1
const value1 = true;
const value2 = true;
const result = value1 && value2;
console.log(result);

// 問題2
// const value1 = false;
// const value2 ="value1がfalse"
// const result = value1 || value2;
// console.log(result); 

// 問題3
// const value1 = false;
// const result = value1 ? "TRUE" : "FALSE";
// console.log(result);

// 問題4
// const value1 = undefined;
// const value2 = "文字列";
// // const result = value1 === null || value1 === undefined ? value2: value1;
// const result = value1 ?? value2;
// console.log(result);

// isIcon が true のとき、文字列"hoge" を表示する（false, undefinedのときは何もしない）
const isIcon = true;
// if(isIcon) {
//   console.log("hoge");
// }
console.log(isIcon && "hoge")
