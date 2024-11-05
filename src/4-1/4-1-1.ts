export default {};
//　関数宣言の例
// function range(min: number, max: number): number[] {
//   const result = [];
//   for(let i = min; i <= max; i++){
//     result.push(i);
//   }
//   return result;
// }

// console.log(range(5,10)); //[ 5, 6, 7, 8, 9, 10 ]

// 引数の数や、型を間違えるとコンパイルエラーとなる
// console.log(range("5","10")); // エラー：Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(range(5)); // エラー： Expected 2 arguments, but got 1.

// 関数宣言の巻き上げ

console.log(range(5, 10)); //[ 5, 6, 7, 8, 9, 10 ]

function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
