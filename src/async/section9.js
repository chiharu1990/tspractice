export default {};
const promise = new Promise((resolve, reject) => {
  // 非同期でresolveする
  setTimeout(() => {
    resolve();
    resolve(); // 二度目以降のresolveやrejectは無視される
    // すでにresolveされているため無視される
    reject(new Error("エラー"));
  }, 1000);
});

promise.then(
  () => {
    console.log("fulfilledとなった");
  },
  (error) => {
    // この行は呼び出されない
  }
);
