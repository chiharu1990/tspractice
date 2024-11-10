export default {};
// asyncではない関数ではawait式は利用できない
// function main() {
//   await Promise.resolve(); // エラー：SyntaxError: await is only valid in async functions and the top level bodies of modules
// }

// async function asyncMain() {
//   // 中でawaitしても、Async Functionの外側の処理まで止まるわけではない
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 16);
//   });
// }
// console.log("1 .asyncMain関数を呼び出します");
// // Async Functionは外から見れば単なるPromiseを返す関数
// asyncMain().then(() => {
//   console.log("3. asyncMain関数が完了しました");
// });
// // Async Functionの外側の処理はそのまま進む
// console.log("2. asyncMain関数外では、次の行が同期的に呼び出される");
/**
 * 実行
 * 1 .asyncMain関数を呼び出します
 * 2. asyncMain関数外では、次の行が同期的に呼び出される
 * 3. asyncMain関数が完了しました
 */

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

// リソースを順番に取得する
async function fetchResources(resources) {
  const results = [];
  console.log("1. fetchResourcesを開始");
  // コールバック関数をAsync Functionに変更
  resources.forEach(async function (resource) {
    console.log(`2. ${resource}の取得開始`);
    // await式を利用できるようになった
    const response = await dummyFetch(resource);
    // dummyFetchが完了するのは、fetchResources関数が返したPromiseが解決された後
    console.log(`5. ${resource}の取得完了`);
    results.push(response.body);
  });
  console.log(`3. fetchResourcesを終了`);
  return results;
}
const resources = ["/resource/A", "/resource/B"];
// リソースを取得して出力する
fetchResources(resources).then((results) => {
  console.log(`4. fetchResourcesの結果を取得`);
  // しかし、resultsは空になってしまう
  console.log(results); // => []
});

/**
 * 実行
 * 1. fetchResourcesを開始
 * 2. /resource/Aの取得開始
 * 2. /resource/Bの取得開始
 * 3. fetchResourcesを終了
 * 4. fetchResourcesの結果を取得
 * []
 * 5. /resource/Bの取得完了
 * 5. /resource/Aの取得完了
 */
