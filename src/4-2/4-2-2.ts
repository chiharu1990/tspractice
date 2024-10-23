export default {};
// 関数の返り値の型を明記しない場合、型推論で決められる
const xRepeat = (num: number) => "x".repeat(num);
// xRepeatの型は(num: number) => string

// 関数の返り値を返さない場合も型注釈を省略できる
const g = (num: number) => {
  for(let i = 0; i < num; i++){
    console.log("Hello, World!");
  }
}
// gの型は(num: number) => voidとなる