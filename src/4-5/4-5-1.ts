export default {};
// const repeat = function<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for(let i = 0; i < length; i++){
//     result.push(element);
//   }
//   return result;
// }

// // 関数の外には変数resultは存在しない
// console.log(result); // エラー：Cannot find name 'result'.

// 内側のスコープからはより外側のスコープの変数にアクセスすることができる
// const repeatLength = 5;
// const repeat = function<T>(element: T): T[] {
//   const result: T[] = [];
//   for(let i = 0; i < repeatLength; i++){
//     result.push(element);
//   }
//   return result;
// }

// console.log(repeat("a")); // [ 'a', 'a', 'a', 'a', 'a' ]

// 内側と外側に同じ名前の変数があるときはより内側のスコープが優先される
const repeatLength = 5;
const repeat = function <T>(element: T): T[] {
  const repeatLength = 3;

  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a")); // [ 'a', 'a', 'a' ]: 内側のスコープ内のrepeatLengthが優先される
console.log(repeatLength); // 5: 関数の外側でrepeatLengthにアクセスするとモジュールスコープの変数repeatLengthにアクセスされる
