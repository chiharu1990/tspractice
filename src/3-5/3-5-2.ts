export default {};
// const arr = [0, 123, -456 * 100];
// console.log(arr[0]); // 0
// console.log(arr[1]); // 123

// 配列の要素を書き換える
// const arr = [0, 123, -456 * 100];
// console.log(arr); // [ 0, 123, -45600 ]
// arr[1] = 5400;
// console.log(arr); // [ 0, 5400, -45600 ]

// 配列の再代入について
const arr = [0, 123, -456 * 100];
// これはOK
arr[1] = 5400;
// これはエラー（別の配列を代入することはできない）
// arr = [1, 2, 345, 67]; // エラー：Cannot assign to 'arr' because it is a constant.