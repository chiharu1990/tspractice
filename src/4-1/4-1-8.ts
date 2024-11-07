export default {};
const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

// const nums = [1, 2, 3, 4, 5];
// console.log(sum(...nums)); // 15

// 以下の関数sum3をスプレッド構文を使って呼び出すことはできない
// const sum3 = (a: number, b: number, c: number) => a + b + c;
// const nums = [1, 2, 3];
// console.log(sum3(...nums)); // エラー：A spread argument must either have a tuple type or be passed to a rest parameter.
// sum3は3つの引数を受け取るところ、number[]型であるnumsの要素は3つとは限らず、3つの引数を渡せないかもしれないから
// sum3(...nums)の型チェックは要素数不明の何らかの配列という扱いになる
// このエラーを回避するには、numsの要素数が3であるという情報を肩に残す必要がある。
// タプル型を用いて回避する
// const sum3 = (a: number, b: number, c: number) => a + b + c;
// const nums:[number, number, number]  = [1, 2, 3];
// console.log(sum3(...nums)); // 6
