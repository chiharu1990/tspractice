export default {};
// for-of文によるループ
const arr = [1, 10, 100];
// for(const elm of arr){
//   console.log(elm); // 1,10,100の順に表示される
// }

// ループの中で変数に再代入したい場合はletを使う
for(let elm of arr){
  elm *= 10
  console.log(elm); // 1,10,100の順に表示される
}
// for-of文を実行した後でもarrの中身そのものの要素は変わらない
console.log(arr); // [1, 10, 100]