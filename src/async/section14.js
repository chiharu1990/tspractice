export default {};
// Promise.resolve().then(function onFulfilledA(){
//   return Promise.reject(new Error("失敗"));
// }).then(function onFulfilledB(){
//   // onFulfilledBは呼び出されない
// }).catch(function onRejected(error){
//   console.log(error.message); // => "失敗"
// }).then(function onFulfilledC() {
//   console.log("onFulfilledCは呼び出される");
// });

function main() {
  return Promise.reject(new Error("失敗"));
};

// mainはRejectedなPromiseを返す
main().catch(error => {
  // mainで発生したエラーのログを出力する
  console.log(error.message); // => 失敗
  // Promiseチェーンはそのままエラーを継続させる
  return Promise.reject(error);
}).then(() => {
  // 前のcatchでRejectedなPromiseが返されたため、この行は実行されない
}).catch(error => {
  console.log(error + "mainの処理が失敗した"); // => Error: 失敗mainの処理が失敗した
})
