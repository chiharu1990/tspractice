export default {};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("文字列を入力してください:", (line) => {
//   //文字列が入力されるとここが実行される
//   console.log(`${line}が入力されました`);
//   rl.close();
// });

// 1000を足した値を表示させたい
// rl.question("数値を入力してください:", (line) => {
//   console.log(line + 1000);
//   rl.close();
// });

// lineは文字列
rl.question("数値を入力してください:", (line) => {
  const result = line + 1000;
  console.log(result);
  rl.close();
});
// 明示的な型注釈がない場合、変数の型を自動的に判断してくれる（型推論）
// +では実際にある型と必要な型が違う場合には自動的に変換が行われる。（暗黙の変換）
