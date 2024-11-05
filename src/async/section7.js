import { time } from "console";

export default {};
/**
 * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
 * 指定した`path`にデータがある場合、成功として**Resolved**状態のPromiseオブジェクトを返す
 * 指定した`path`にデータがない場合、失敗として**Rejected**状態のPromiseオブジェクトを返す
 */

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/success")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
}

// thenメソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// /success/data のリソースは存在するので成功し、onFulfilledが呼ばれる
dummyFetch("/success/data").then(
  function onFulfilled(response) {
    console.log(response); // => { body: "Response body of /success/data" }
  },
  function onRejected(error) {
    // この行は実行されない
  }
);

// /failure/data のリソースは存在しないのでonRejectedが呼ばれる
dummyFetch("/failure/data").then(
  function onFulfilled(response) {
    // この行は実行されない
  },
  function onRejected(error) {
    console.log(error); // Error: "NOT FOUND";
  }
);

// 一定時間後に解決されるPromiseインスタンスを返す
// このPromiseインスタンスに対してthenメソッドで成功時のコールバック関数だけを登録している
function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
}

delay(10).then(() => {
  console.log("10ミリ秒後に呼ばれる");
});

// thenメソッドとcatchメソッドで失敗時のエラー処理
function errorPromise(message) {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
}

// 非推奨：thenメソッドで失敗時のコールバック関数だけを登録
errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
  console.log(error.message); // => "thenでエラーハンドリング"
});

// 推奨：catchメソッドで失敗時のコールバック関数を登録
errorPromise("catchでエラーハンドリング").catch((error) => {
  console.log(error.message); // catchでエラーハンドリング
});
