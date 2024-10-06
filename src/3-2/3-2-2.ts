export default {};
// 型が示す条件に合わないオブジェクトを変数に入れようとするとコンパイルエラーが発生する
// const obj : {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: true // Type 'boolean' is not assignable to type 'string'. のエラー
// }

// 宣言されているプロパティを持っていないオブジェクトを代入しようとした場合もコンパイルエラーとなる
// Property 'bar' is missing in type '{ foo: number; }' but required in type '{ foo: number; bar: string; }'. のエラー
// const obj : {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123
// }

// オブジェクトのプロパティに宣言と異なる型の値を代入するのはコンパイルエラーとなる
// const obj = {
//   foo: 123,
//   bar: "Hello,World!"
// }

// obj.foo = null; // Type 'null' is not assignable to type 'number'. のエラー

// 宣言されていないプロパティにアクセスしようとするのもコンパイルエラーとなる
// const obj = {
//   foo: 123,
//   bar: "Hello,World!"
// }

// console.log(obj.hoge); // Property 'hoge' does not exist on type '{ foo: number; bar: string; }' のエラー