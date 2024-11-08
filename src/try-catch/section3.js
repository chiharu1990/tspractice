export default {};
// 渡された数値が0以上ではない場合に例外を投げる関数
function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive.`);
  }
}
try {
  // 0未満の値を渡しているので、関数が例外を投げる
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error); // => true
  console.log(error.message); // => "-1 is not positive."
}

// 文字列を例外として投げるアンチパターンの例
try {
  throw "例外が投げられた";
} catch (error) {
  console.log(error); // => 例外が投げられた
}
