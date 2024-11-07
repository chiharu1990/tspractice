import { resolve } from "path";

export default {};
// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(timeoutMs);
//     }, timeoutMs);
//   });
// }

// const promise1 = delay(1);
// const promise2 = delay(2);
// const promise3 = delay(3);

// Promise.all([promise1, promise2, promise3]).then(function (values) {
//   console.log(values); // => [ 1, 2, 3 ]
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random);
//   });
// }

// const fetchedPromise = Promise.all([dummyFetch("/resource/A"), dummyFetch("/resource/B")]);

// // fetchedPromiseの結果をDestructuringでresponseA、responseBに代入している
// fetchedPromise.then(([responseA, responseB]) => {
//   console.log(responseA.body); // => Response body of /resource/A
//   console.log(responseB.body); // => Response body of /resource/B
// });

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random);
  });
}

const fetchedPromise = Promise.all([
  dummyFetch("/resource/A"),
  dummyFetch("/not_found/B"), // Bは存在しないため失敗する
]);

fetchedPromise
  .then(([responseA, responseB]) => {
    // この行は実行されない
  })
  .catch((error) => {
    console.log(error); // Error: NOT FOUND
  });
