export default {};

//比較演算子（値の大小の比較を行う）
// const left1 = -5, right1 = 0;
// console.log(left1 < right1); //true
// const left2 = 100n, right2 = 50n;
// console.log(left2 >= right2); //true
// const left3 = -10, right3 = 0; 
// console.log(left3 > right3); //false
// const left4 = 12n, right4 = 8n;
// console.log(left4 <= right4) //false

// //文字列の大小比較
// console.log("apple" < "orange"); // false（aはoよりもコードポイントが小さいため）

// //等価演算子（値の一致判定を行う）
// const left:number = 1;
// const right:number = 2;

// console.log(left === right); //false
// console.log(left !== right); //true

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("パスワードを入力してください",(password) => {
  if(password === "password"){
    console.log("ようこそ！")
  } else {
    console.log("だあれ？");
  }
  rl.close();
});

// == と === の違い
const str: any = "3";
console.log(str == 3) // true（暗黙の型変換によって文字列が数値に変換されているため）
console.log(str === 3) // false（異なる型を比較しているため）

// コラム5 NaNを判定する方法
const x = NaN;
console.log(Number.isNaN(x));