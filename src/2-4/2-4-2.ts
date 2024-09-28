export default {};

const x = 123;
const minusx = -x;
console.log(minusx); // -123 number型

const str = "123";
console.log(+str * 100); //12300 +strと書くことで変数strを文字列から数値に変換している

// インクリメント(++)・デクリメント(--)
// 式の前にも後にもつけられる
// 変数fooの中身が変動するため、letで宣言された変数にしか使用できない
let foo = 10;
// foo++;
// console.log("foo++",foo); //11
// --foo;
// console.log("--foo",foo); //10

// オペランドの前におくか後ろに置くかで評価の順番が変わる
// 後置インクリメント演算子（変動前の変数の中身が返る）
// console.log(foo++); //10
// console.log(foo);  //11
// 後置デクリメント演算子（変動前の変数の中身が返る）
// console.log(foo--); //10
// console.log(foo); //9

// 前置インクリメント演算子（変動前の変数の中身が返る）
// console.log(++foo); //11
// console.log(foo); //11
// 前置デクリメント演算子（変動前の変数の中身が返る）
// console.log(--foo); //9
// console.log(foo); //9


// console.log("++foo",++foo); //11
// console.log("foo--",foo--); //11