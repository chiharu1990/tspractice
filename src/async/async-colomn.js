export default {};
// fs.readfile("./example.txt", (error, data) => {
//   if (error) {
//     // 読み込み中にエラーが発生した
//   } else {
//     // データ読み込みに失敗した
//   }
// });

/**
 * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
 * 指定したpathにデータがある場合は`callback(null, レスポンス)`を呼ぶ
 * 指定したpathにデータがない場合は`callback(エラー)`を呼ぶ
 */

function dummyFetch(path, callback) {
  setTimeout(() => {
    // /successから始まるパスにはリソースがあるという設定
    if (path.startsWith("/success")) {
      callback(null, { body: `Response body of ${path}` });
    } else {
      callback(new Error("NOT FOUND"));
    }
  }, 1000 * Math.random());
}

// /success.data にリソースが存在するので、responseにはデータが入る
dummyFetch("/success/data", (error, response) => {
  if (error) {
    // この行は実行されない
  } else {
    console.log(response); // => { body: 'Response body of /success/data' }
  }
});

// /failure/data にはリソースは存在しないので、errorにはエラーオブジェクトが入る
dummyFetch("/failure/data", (error, response) => {
  if (error) {
    console.log(error.message); // => "NOT FOUND"
  } else {
    // この行は実行されない
  }
});
