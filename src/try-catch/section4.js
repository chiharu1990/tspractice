export default {};
// ReferenceError
// try {
//   // 存在しない変数を参照する
//   console.log(x);
// } catch (error) {
//   console.log(error instanceof ReferenceError); // => true
//   console.log(error.name); // => ReferenceError
//   console.log(error.message); // => x is not defined
// }

// SyntaxError
// JavaScriptとして正しくない構文をパースするとSyntaxエラーが発生する
// foo! bar!
/**
 * 実行
 * SyntaxError: Unexpected token '!'
 */

// try {
//   // eval関数は渡した文字列をJavaScriptとして実行する関数
//   // 正しくない構文をパースさせ、SyntaxErrorを実行時に発生左折
//   eval("foo! bar!");
// } catch (error) {
//   console.log(error instanceof SyntaxError); // => true
//   console.log(error.name); // => SyntaxError
//   console.log(error.message); // =>  Unexpected token '!'
// }

// TypeError
try {
  // 関数ではないオブジェクトを関数として呼び出す
  const fn = {};
  fn();
} catch (error) {
  console.log(error instanceof TypeError); // => true
  console.log(error.name); // => TypeError
  console.log(error.message); // => fn is not a function
}
