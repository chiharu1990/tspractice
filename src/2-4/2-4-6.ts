export default {};

const input1 = "123", input2 = "";
const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); //true
// input1を真偽値に変換した結果はtrue、!はオペランドを真偽値に変換してさらに反転している。
// !!で反転した真偽値をさらに反転しているので結果はtrueとなる
// !!input1はBoolean(input1)と同じ意味

const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); //false

// &&の場合
// 左側のオペランドを真偽値に変換した結果がfalseなら左側のオペランドを返し、trueなら右側のオペランドを返す
// const x = "foo", y = "bar";
// console.log(x && y); //"bar"
// x（"foo"）は真偽値に変換するとtrueなのでyを返す

// const x = 0, y = 123;
// console.log(x && y); //0
// x(0)は真偽値に変換するとfalseなので、xを返す

// ||の場合
// 左側のオペランドを真偽値に変換した結果がtrueなら左側のオペランドを返し、falseなら右側のオペランドを返す
// const x = "foo", y = "bar";
// console.log(x || y); //"foo"
// x（"foo"）は真偽値に変換するとtrueなのでxを返す

const x = 0, y = 123;
console.log(x || y); //123
import { get } from "http";
// x(0)は真偽値に変換するとfalseなので、yを返す


import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください", (name) => {
  const displayName = name || "名無し"; //入力がなかった時、空文字列は真偽値に変換するとfalseとなるため、"名無し"という結果が返る
  console.log(`こんにちは${displayName}さん`)
  rl.close();
})

// && や ||の特徴：短絡評価
// 短絡評価とは、&&や||の演算子を用いて左側の値を返す場合は、右側は評価されないという意味
// 短絡評価は関数呼び出しの処理が不要な場合には行いたくない場合に有用
// 例：const displayName = name || getDefaultName();
// nameがfalseだった時のみgetDefaultName();が実行される。
// 必要のない処理はなるべく行わない方が良いので、このような短絡評価の機能がある


// ??の場合
// 左側のオペランドがnull、またはundefinedの時のみ右側のオペランドを返し、それ以外は左側のオペランドを返す
// データがない場合は代替の値を使うというシチュエーションに適している
// ||と似ているが、||は空文字列や0、falseなどの値も「ない」ものとして扱う点が??と異なっている

// 例：環境変数SECRETを取得。ただし存在しなければ "default" を用いる
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);

// 環境変数SECRETに空文字を入れた時、表示は「secretはです」となる
// ||の場合は右側のオペランドが返る（今回の場合は"default"）が、??の場合は空文字列がそのまま返る
// 扱うデータの性質に合わせて||と??を使い分けることができるようになろう！