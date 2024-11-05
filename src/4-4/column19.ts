export default {};
function makeTriple<T>(x: T, y: T, z: T): T[] {
  return [x, y, z];
}

// stringTripleはstring[]型(型推論)
const stringTriple = makeTriple("foo", "bar", "baz");

// これはコンパイルエラー
// 型引数Tはstringに推論されている
// const mixed = makeTriple("foo", 123, false); // エラー：Argument of type 'number' is not assignable to parameter of type 'string'.

// 文脈からの型が推論に用いられることもある
function double<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}

type NumberToNumber = (arg: number) => number;

const plus2: NumberToNumber = double((x) => x + 1);
console.log(plus2(10)); // 12

// 型推論がunknown型になる場合
// function double<T>(func: (arg: T) => T): (arg: T) => T {
//   return (arg) => func(func(arg));
// }

// const plus2 = double(x => x +1); // エラー：'x' is of type 'unknown'.
