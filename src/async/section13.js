export default {};
// Promise.resolve(1).then((value) => {
//   console.log(value); // => 1
//   return value * 2;
// }).then((value) => {
//   console.log(value); // => 2
//   return value * 2;
// }).then((value) => {
//   console.log(value); // => 4
//   // 値を返さない場合はundefinedを返す
// }).then((value) => {
//   console.log(value); // => undefined
// });

/**
 * 実行
 * 1
 * 2
 * 4
 * undefined
 */

Promise.reject(new Error("失敗")).catch(error => {
  // 一度catchすれば次に呼ばれるのは成功時のコールバック
  return 1;
}).then(value => {
  console.log(value); // => 1
  return value * 2;
}).then(value => {
  console.log(value) // => 2
});