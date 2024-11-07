export default {};
// const arr = [0,123,-456 * 100];
// console.log(arr); //[ 0, 123, -45600 ]

// TypeScriptにおいては配列に複数種類の型を同時に入れることができる
// const arr2 = [100, "文字列", false];

// 配列リテラルもスプレッド構文が利用可能
const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2); //[ 1, 2, 3, 4, 5, 6 ]
