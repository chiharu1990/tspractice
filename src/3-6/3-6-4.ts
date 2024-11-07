export default {};
// type obj = {foo?: number};
// const obj1: obj = {};
// const obj2: obj = {foo: -1234};

// 変数にundefinedが入る時、デフォルト値（500）が代入される
// const {foo = 500} = obj1;
// console.log(foo); // 500

// const {foo:bar = 500} = obj2;
// console.log(bar); // -1234

//分割代入を用いずに同じ処理を書く場合
// const foo = obj1.foo !== undefined ? obj1.foo : 500;
// console.log(foo); // 500

// デフォルト値はnullに対しては何も行わない
// const obj = {foo: null};
// const {foo = 123} = obj;
// console.log(foo); //null

type Obj = { foo?: number };
const obj1: Obj = {};
const { foo = 500 } = obj1;
console.log(foo); // 500

// デフォルト値は変数に対してだけではなく、ネストしたパターンに対しても使用することができる
type NestObj = {
  obj?: {
    foo: number;
  };
};
const nested1: NestObj = {
  obj: { foo: 123 },
};
const nested2: NestObj = {};

const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
console.log(foo1); // 123

const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
console.log(foo2); // 500
