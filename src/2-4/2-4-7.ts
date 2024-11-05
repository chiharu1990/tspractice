export default {};
// 条件演算子（三項演算子）
// 条件式 ? 真の時の式 : 偽の時の式

// 入力された値が0以上、100未満であるかどうかを判定する
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください", (line) => {
  const num = Number(line);
  const message =
    0 <= num && num < 100 ? `${num}は0以上100未満です` : `${num}は0以上100未満ではありません`;
  console.log(message);
  rl.close();
});

// 条件演算子の返り値の型は真の時の式と偽の時の式の型によって決まる
// 条件式の型（?の前の式）はなんでも構わない。boolean以外の型が条件として与えられた場合はその値を真偽値に変換してから条件判定に用いられる
// 例：num ? x : y
// numが0（またはNaN）以外の時はxが返り、numが0（またはNaN）の時はyが返る
// これは数値を真偽値に変換すると0とNaN以外はtrueで、0とNaNはfalseになるから
