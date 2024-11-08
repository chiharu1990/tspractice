export default {};
try {
  // 例外を投げる
  throw new Error("例外が投げられた");
} catch (error) {
  // catch節のスコープでエラーにアクセスできる
  console.log(error.message); // => "例外が投げられた"
}
