export default {};
// 文字列はプリミティブの一種なのにプロパティが存在しているように見える
const str = "Hello, World!";
console.log(str.length); //13

// 文字列はlengthプロパティを持っているため、HasLength型の変数に文字列を代入することができる。
type HasLength = {length: number};
const obj:HasLength = "foobar";

// {}型はnullとundefined以外のあらゆる型を受け入れる
// これらはOK
let val: {} = 123;
val = "foobar";
val = {num: 1234};

// val = null; // これはエラー： Type 'null' is not assignable to type '{}'.
// val = undefined; //エラー：ype 'undefined' is not assignable to type '{}'.