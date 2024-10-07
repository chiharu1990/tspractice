export default {};
// オブジェクトリテラルに余計なプロパティが存在するエラー
// type User = {
//   name: string;
//   age: number;
// }
// const u: User = {
//   name: "uhyo",
//   age: 26,
//   // Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.
//   telNumber: "09012345678"
// }


// エラーが発生しない例
type User = {
  name: string;
  age: number;
}
const obj = {
  name: "uhyo",
  age: 26,
  telNumber: "09012345678"
}

const u: User = obj;