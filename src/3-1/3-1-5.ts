export default {};
// const obj = {
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   foo:123,
//   ...obj
// };

// console.log(obj2); // {foo:123, bar: 456, baz: 789}

// スプレッド構文と通常のプロパティ宣言が同じプロパティを与える場合、後に書かれている方が採用される
// const obj1 = {
//   foo: 123,
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   ...obj1,
//   foo: -9999
// };

// console.log(obj2.foo); //-9999

// スプレッド構文の前に上書きする値を書いても無意味なのでコンパイルエラーとなる
// const obj1 = {
//   foo: 123,
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   foo: -9999, //'foo' is specified more than once, so this usage will be overwritten.
//   ...obj1,
// };
// ...obj1の前に上書きするのは意味がないため、コンパイルエラーとなる

// スプレッド構文は１つのオブジェクトリテラルの中で複数回使うこともできる
const obj1 = {
  foo: 123,
  bar: 456,
};

const obj2 = {
  bar: -999,
  baz: -9999,
};

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3); // {foo: 123, bar: -999, baz: -9999}
// 両方に存在しているオブジェクトbarについては後に書かれているobj2のbarが採用される
