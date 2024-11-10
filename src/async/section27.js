export default {};
// このコードはModuleのトップレベルでのみ動作する
console.log("実行開始");
const startTime = Date.now();
// awaitを使って1秒待つ
await new Promise((resolve) => setTimeout(resolve, 1000));
console.log(`実行終了：${Date.now() - startTime}ms 経過しました`);

/**
 * 実行
 * 実行開始
 * 実行終了：1003ms 経過しました
 */

// awaitを使うためだけにAsync Functionの即時実行関数を実行している
(async function () {
  // awaitを使う処理
  const result = await doAsyncTask();
  // ...
})();
