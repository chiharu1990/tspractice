export default {};
// const obj = {
//   foo: 123,
//   bar: "Hello,World!"
// }

// 変数objに型注釈を加える
// const obj: {
//   foo: number,
//   bar: string
// } = {
//   foo: 123,
//   bar: "Hello,World!"
// }

//プロパティ名の部分は文字列リテラルを使うことができる
const obj: {
  "foo bar": number,
} = {
  "foo bar": 123,
}