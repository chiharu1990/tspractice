export default {};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('名前を入力してください',(name) => {
  console.log("こんにちは、" + name + "さん");
  rl.close();
})

// +は文字列の連結ができる
// +は文字列が渡されてもコンパイルエラーにはならない
// 片方が文字列であれば、もう片方はどんな値でも渡すことができて、その場合は文字列に変換されてから結合される
console.log("foo" + true); //"footrue"
console.log(null + "bar"); //"nullbar"