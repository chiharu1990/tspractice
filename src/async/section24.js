export default {};
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
// 複数のリソースを順番に取得する
async function fetchResources(resources) {
  const results = [];
  // for...of文でresourcesの配列から1つずつ要素を取り出して処理
  for (const resource of resources) {
    // ループ内で非同期処理の完了を待っている
    const response = await dummyFetch(resource);
    results.push(response.body);
  }
  // 反復処理が全て終わったら結果を返す
  return results;
}

//取得したいリソースのパス配列
const resources = ["/resource/A", "/resource/B"];

// リソースを取得して出力する
fetchResources(resources).then((results) => {
  console.log(results); // => [ 'Response body of /resource/A', 'Response body of /resource/B' ]
});
