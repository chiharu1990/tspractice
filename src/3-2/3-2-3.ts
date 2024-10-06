export default {};
// type文
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello,World!"
// }

// FooBarObjを宣言前に使うこともできる
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello,World!"
// }
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };

// type文はプリミティブの型に別名を与えることも可能
type UserId = string;
const id: UserId = "uhyo";

// 作った型にさらに別名を与えることも可能
type FooObj = {foo: number};
type MyObj = FooObj;
const obj: MyObj = {
  foo: 0
};