export default {};
// // Async Functionは必ずPromiseを返す
// async function doAsync() {
//   // 非同期処理
// }

// async function asyncMain() {
//   // doAsyncの非同期処理が完了するまで待つ
//   await doAsync();
//   //次の行はdoAsyncの非同期処理が完了されるまで実行されない
//   console.log("この行は非同期処理が完了後に実行される");
// }

// function asyncMain() {
//   return Promise.resolve(42).then((value) => {
//     console.log(value); // => 42
//   });
// }

// asyncMain(); // Promiseインスタンスを返す

// async function asyncMain() {
//   // await式で評価した右辺のPromiseがRejectedとなったため、例外がthrowされる
//   const value = await Promise.reject(new Error("エラーメッセージ"));
//   // await式で例外が発生したため、この行は実行されない
// }

// // Async Functionは自動的に例外をキャッチできる
// asyncMain().catch((error) => {
//   console.log(error.message); // => "エラーメッセージ"
// });

async function asyncMain() {
  // await式のエラーはtry...catchできる
  try {
    // await式で評価した右辺のPromiseがRejectedとなったため、例外がthrowされる
    const value = await Promise.reject(new Error("エラーメッセージ"));
  } catch (error) {
    console.log(error.message); // => "エラーメッセージ"
  }
}

// asyncMainはResolvedなPromiseを返す
asyncMain().catch((error) => {
  // すでにtry...catchされているため、この行は実行されない
});
