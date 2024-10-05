export default {};
const obj = {
  foo: 555,
  bar: "文字列",
}

// 例：ユーザーの名前としてユーザーが入力した値（input）を用いるが空文字の場合は""名無し"にする
// const user = {
//   name: input ? input : "名無し",
//   age: 20
// };

// 省略記法
// const name = input ? input : "名無し";
// const user = {
//   name: name,
//   age: 20
// };

//プロパティ名と変数名が同じ場合はさらに省略することができる
// const name = input ? input : "名無し";
// const user = {
//   name,
//   age: 20
// };