export default {};
// Promise.resolveメソッド
// const fulfilledPromise = Promise.resolve();

// const fulfilledPromise = Promise.resolve();と同じ意味
// const fulfilledPromise = new Promise((resolve) => {
//   resolve();
// });

// resolve(42)されたPromiseインスタンスを作成する
// const fulfilledPromise = Promise.resolve(42);
// fulfilledPromise.then(value => {
//   console.log(value); // => 42
// })

// 動機的な処理が実行された後にthenメソッドのコールバック関数が非同期なタイミングで実行される
// const promise = Promise.resolve();

// promise.then(() => {
//   console.log("2. コールバック関数が実行されました");
// });
// console.log("1. 動機的な処理が実行されました");

// /** 
//  * 実行
//  * 1. 動機的な処理が実行されました
//  * 2. コールバック関数が実行されました
//  * */ 

const promise = new Promise((resolve) => {
  console.log("1. resolveします");
  resolve();
});
promise.then(()=> {
  console.log("3. コールバック関数が実行されました");
});
console.log("2. 同期的な処理が実行されました")

/**
 * 実行
 * 1. resolveします
 * 2. 同期的な処理が実行されました
 * 3. コールバック関数が実行されました
 */