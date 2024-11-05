export default {};
// 通常の型推論
// const xRepeat = (num: number): string => "x".repeat(num);
// xRepeatの型は(num: number) => string

// 逆方向の型推論
type F = (arg: number) => string;
// この関数式は引数の型を書かなくて良い
const xRepeat: F = (num): string => "x".repeat(num);

// コールバック関数は多くの場合引数の型を書かなくてもよくなる
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = nums.filter((x) => x % 3 === 0);
console.log(arr2); //[ 3, 6, 9 ]

// 文脈上の型がオブジェクト型を伝播してくる場合
type Greetable = {
  greet: (str: string) => string;
};
const obj: Greetable = {
  greet: (str) => `Hello, ${str}!`,
};

// 型を省略できない時のエラー
// const f = (num) => num * 2; // エラー：Parameter 'num' implicitly has an 'any' type.

// 型注釈を書かなくて良い時限定の省略記法
// const arr2 = nums.filter(x => x % 3 === 0);
