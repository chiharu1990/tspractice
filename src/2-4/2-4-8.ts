export default {};

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください", (name) => {
  if (name === "") {
    name = "名無し";
  }
  console.log(`こんにちは${name}さん`);
  rl.close();
});

// nameが空文字列だった場合、代入演算子を用いてnameに"名無し"という文字列を代入している（name = "名無し";）
// ほとんどの場合代入演算子は式文として使用される
// 代入演算子を使うときは変数の型と式の型が合致する必要がある

// let foo: string = "文字列";
// foo = 123; // Type 'number' is not assignable to type 'string'.
// 変数fooはstring型として宣言しているのに数値を代入しようとしているのでエラーになる

// 代入演算子はconstで宣言された変数には用いることができない
// 代入演算子は副作用を目的に使われることが多い演算子
// ここでいう副作用とは代入によって変数の中身が変わること
// 代入演算子の返り値はその右のオペランドの値がそのまま返される
// name = "名無し";という式の返り値は"名無し"という文字列になる

// 代入演算子のその他のバリエーション
// +=,-=,*=,/=,%=,**=
// 変数 += 式 のように使う
// 変数 += 式 は、変数 = 変数 + 式と同じ
// すでにある変数に対してなんらかの操作を加えたい場合に有効

let num = 0;
num += 100; //numは100(0 + 100)
num *= 4; // numは400(100 * 4)
num -= 200; // numは200(400 - 200)
num /= 2; // numは100(200 / 2)
num **= 0.5; // numは10(100 ** 0.5)

console.log(num); // 10
