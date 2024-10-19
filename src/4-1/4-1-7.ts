export default {};
// 与えられた引数を全て合計した数を返す関数
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for(const num of args){
//     result += num;
//   }
//   return result;
// }

// console.log(sum(1,10,100)); // 111
// console.log(sum(123,456)); // 579
// console.log(sum()); // 0

// 次のようにrest引数(この例では...args)に配列型以外を指定するとエラーになる
// const sum = (...args: number): number => {} // エラー：A rest parameter must be of an array type.

// rest引数は通常の引数と併用できる
const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for(const num of args){
    result += num;
  }
  return result;
}

console.log(sum(1,10,100)); // 1110 baseに1が入り、argsには[10,100]が入る
console.log(sum(123,456)); // 123456
// console.log(sum()); // これはエラー： Expected at least 1 arguments, but got 0.
// 最低一つの引数が必要だが、与えられた引数が0個であるという意味
