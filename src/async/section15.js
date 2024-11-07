export default {};
//promiseにはResolveまたはRejectedなPromiseインスタンスがランダムで入る
// const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();

// promise
//   .then(() => {
//     console.log("Promiseのthenメソッド");
//   })
//   .catch(() => {
//     console.log("Promiseのcatchメソッド");
//   })
//   .finally(() => {
//     // 成功、失敗のどちらの場合でも呼び出される
//     console.log("Promiseのfinallyメソッド");
//   });

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
}

// リソースを取得中かどうかのフラグ
let isLoading = true;
dummyFetch("/resource/A")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    isLoading = false;
    console.log("Promiseのfinallyメソッド");
  });

/**
 * 実行
 * { body: 'Response body of /resource/A' }
 * Promiseのfinallyメソッド
 */
