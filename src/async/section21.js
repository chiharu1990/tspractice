export default {};
// 1. resolveFnは値を返している
// 何もreturnしていない場合はundefinedを返したのと同じ扱いとなる
async function resolveFn() {
  return "返り値";
}

resolveFn().then((value) => {
  console.log(value); // => "返り値"
});

// 2. rejectはPromiseインスタンスを返している
async function rejectFn() {
  return Promise.reject(new Error("エラーメッセージ"));
}

// rejectFnはRejectedなPromiseを返すのでcatchできる
rejectFn().catch((error) => {
  console.log(error.message); // => "エラーメッセージ"
});

// 3. exceptionFnは例外を投げている
async function exceptionFn() {
  throw new Error("例外が発生しました");
  // 例外が発生したため、この行は実行されない
}

// Async Functionで例外が発生するとRejectedなPromiseが返される
exceptionFn().catch((error) => {
  console.log(error.message); // => "例外が発生しました"
});
