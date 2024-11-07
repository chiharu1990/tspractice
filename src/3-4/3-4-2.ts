export default {};
type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj: Family<number, string> = {
  mother: 0,
  father: 100,
  child: "1000",
};
// Family<number,string>型は{mother: number; father: number; child: number;}型と同じ

// 適切な数の型引数を指定せずに型を使用した場合はコンパイルエラーとなる
// エラー：Generic type 'Family' requires 2 type argument(s).
// const obj:Family = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// };
