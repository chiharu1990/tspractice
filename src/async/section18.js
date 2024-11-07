import { resolve } from "path";

export default {};
// timeoutMsミリ秒後にresolveする
// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(timeoutMs);
//     }, timeoutMs);
//   });
// }

// const racePromise = Promise.race([delay(1), delay(32), delay(64), delay(128)]);

// racePromise.then((value) => {
//   // 最も早く完了するのは1ミリ秒後
//   console.log(value); // => 1
// });

// timeoutMsミリ秒後にrejectする
function timeout(timeoutMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
    }, timeoutMs);
  });
}

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

// 500ミリ秒以内に取得できなければ失敗時の処理が呼ばれる
Promise.race([dummyFetch("/resource/data"), timeout(500)])
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.log(error.message);
  });
