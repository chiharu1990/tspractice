export default {};
// Promiseインスタンスの作成
// const executor = (resolve, reject) => {
//   // 非同期処理が成功した時はresolveを呼ぶ
//   // 非同期処理が失敗した時はrejectを呼ぶ
// }
// const promise = new Promise(executor);

const promise = new Promise((resolve, reject) => {
  // 非同期処理が成功した時はresolveを呼ぶ
  // 非同期処理が失敗した時はrejectを呼ぶ
});

const onFulfilled = () => {
  console.log("resolsveされたときに呼ばれる");
}

const onRejected = () => {
  console.log("rejectされたときに呼ばれる");
}

// thenメソッドで成功時と失敗時に呼ばれるコールバック関数を登録
promise.then(onFulfilled, onRejected);