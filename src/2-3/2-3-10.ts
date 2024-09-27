export default {};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});

// 文字列以外を数値に変換したとき
// const num1 = Number(true);
// console.log(num1); //1
// const num2 = Number(false);
// console.log(num2); //0
// const num3 = Number(null);
// console.log(num3); //0
// const num4 = Number(undefined);
// console.log(num4); //NaN

// BigIntに変換
// const bigint1 = BigInt("1234");
// console.log(bigint1); //1234n
// const bigint2 = BigInt(500);
// console.log(bigint2); //500n
// const bigint3 = BigInt(true);
// console.log(bigint3); //1n
// // BigIntにはNaNに相当する値がない
// // BigIntへの変換が不可能な値が渡された場合の挙動はランタイムエラーとなる（小数など）

// const bigint = BigInt("foooooo");
// console.log(bigint);  //SyntaxError: Cannot convert foooooo to a BigInt

// 文字列に変換
// const str1 = String(1234.5);
// console.log(str1); //"1234.5"
// const str2 = String(true);
// console.log(str2); //"true"
// const str3 = String(null);
// const str4 = String(undefined);
// console.log(str3, str4); //"null undefined"

// 真偽値に変換
// console.log(Boolean(123)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(1n)); //true
// console.log(Boolean(0n)); //false
// console.log(Boolean("")); //false
// console.log(Boolean("foobar")); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
