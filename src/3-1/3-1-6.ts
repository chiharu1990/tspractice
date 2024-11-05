export default {};
// 変数fooとbarに入っているオブジェクトが同じである例
// const foo = {num: 1234};
// const bar = foo;
// console.log(bar.num); //1234
// bar.num = 0;
// console.log(foo.num) //0

// 明示的にコピーする ①スプレッド構文を使う
// const foo = {num: 1234};
// const bar = { ...foo  };
// console.log(bar.num); //1234
// bar.num = 0;
// console.log(foo.num) //1234

//スプレッド構文を使わずに書くこともできる
// const foo = {num: 1234};
// const bar = {num: 1234};
// console.log(bar.num); //1234
// bar.num = 0;
// console.log(foo.num) //1234

// スプレッド構文を使うときはネストしたオブジェクトに気をつける
// const foo = {obj: { num: 1234}};
// const bar = {...foo};
// console.log(bar.obj.num); //1234
// bar.obj.num = 0;
// console.log(foo.obj.num) //0
// ネストしたオブジェクトは同じオブジェクトのまま

//ネストしたオブジェクトに対してもスプレッド記法を使うことでコピーすることができる
// const foo = {obj: { num: 1234}};
// const bar = {obj: {...foo.obj}};
// console.log(bar.obj.num); //1234
// bar.obj.num = 0;
// console.log(foo.obj.num) //1234

// オブジェクトに対して一致判定の演算子===を用いた場合の挙動について
const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };

console.log(foo === bar); //true
console.log(foo === baz); //false　中身は同じだが別々のオブジェクトなので
