export default {};

// &&は論理積演算子（「かつ」）、||は論理和演算子（「または」）

const t = true;
const f = false;

console.log(t && t) // true
console.log(t && f) // false
console.log(f && t) // false
console.log(f && f) // false

console.log(t || t) // true
console.log(t || f) // true
console.log(f || t) // true
console.log(f || f) // false

//入力された値が0以上、100未満であるかどうかを判定する
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("数値を入力してください", (line) => {
//   const num = Number(line);
//   if(num >= 0 && num < 100){
//     console.log(`${num}は0以上100未満です`)
//   } else {
//     console.log(`${num}は0以上100未満ではありません`)
//   }
//   rl.close();
// })

// !演算子
// 式がtrueなら!式はfalse、式がfalseなら!式はtrueになる
// 例：数値numがNaNでない時のみ処理を行うとき
rl.question("数値を入力してください", (line) => {
  const num = Number(line);
  if(!Number.isNaN(num)){ // numがNaNではない時
    console.log(`${num}はNaNではありません`)
  } 
  rl.close();
})