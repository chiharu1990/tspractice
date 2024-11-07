export default {};
// asyncPromiseTask関数は、Promiseインスタンスを返す
const asyncPromiseTask = () => {
  return new Promise((resolve, reject) => {
    // さまざまな非同期処理を行う
    // 非同期処理に成功した場合は、resolveを呼ぶ
    // 非同期処理に失敗した場合は、rejectを呼ぶ
  });
};

asyncPromiseTask()
  .then(() => {
    // 非同期処理が成功した時の処理
  })
  .catch(() => {
    // 非同期処理が失敗した時の処理
  });
