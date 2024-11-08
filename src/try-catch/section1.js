export default {};
try {
  console.log("try節：この行は実行される");
  // 未定義の関数を呼び出してReferenceError例外が発生する
  undefinedFunction();
} catch (error) {
  // 例外が発生した後はこのブロックが実行される
  console.log("catch節：この行は実行される");
  console.log(error instanceof ReferenceError); // => true
  console.log(error.message); // => undefinedFunction is not defined
} finally {
  // このブロックは例外の発生に関係なく必ず実行される
  console.log("finally節：この行は実行される");
}

// catch節のみ
try {
  undefinedFunction();
} catch (error) {
  console.log(error);
}

// finally節のみ
try {
  undefinedFunction();
} finally {
  console.log("この行は実行される");
}
// finally節のみでは例外がキャッチされないため、この行は実行されません
