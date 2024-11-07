export default {};
// Promise.resolve()
//   .then(() => {
//     console.log("1");
//   })
//   .then(() => {
//     console.log("2");
//   });

/**
 * 実行
 * 1
 * 2
 */

// // Promiseチェーンを変数に入れた場合
// const firstPromise = Promise.resolve();
// const secondPromise = firstPromise.then(() => {
//   console.log("1");
// });
// const thirdPromise = secondPromise.then(() => {
//   console.log("2");
// });

// // それぞれ新しいPromiseインスタンスが作成されている
// console.log(firstPromise === secondPromise); // false
// console.log(secondPromise === thirdPromise); // false

/**
 * 実行
 * 1
 * 2
 */

// ランダムでFulfilledまたはRejectedのPromiseインスタンスを返す関数
// function asyncTask() {
//   return Math.random() > 0.5
//     ? Promise.resolve("成功")
//     : Promise.reject(new Error("失敗"))
// }

// asyncTask()
//   .then(function onFulfilled(value) {
//     console.log(value); // => "成功"
//   })
//   .catch(function onRejected(error) {
//     console.log(error.message); // => "失敗"
//   });

// RejectedなPromiseは次の失敗時の処理までスキップする
// const rejectedPromise = Promise.reject(new Error("失敗"));

// rejectedPromise.then(() => {
//     // このthenのコールバック関数は呼び出されない
//   })
//   .then(() => {
//     // このthenのコールバック関数は呼び出されない
//   })
//   .catch((error) => {
//     console.log(error.message); // => "失敗"
//   });

// Promise.resolve().then(() => {
//   // 例外が発生するとthenメソッドはRejectedなPromiseを返す
//   throw new Error("例外");
// }).then(() => {
//   // このthenのコールバック関数は呼び出されない
// }).catch( error => {
//   console.log(error.message); // => "例外"
// });

Promise.reject(new Error("エラー"))
  .catch((error) => {
    console.error(error); // Error: エラー
  })
  .then(() => {
    console.log("thenのコールバック関数が呼び出される");
  });
