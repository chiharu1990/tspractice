export default {};
// for文を使って1から100まで出した和を表示するプログラム
let sum = 0;
for (let i: number = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); //5050

// 1から100までの数字で偶数だけconsole.logに書き出すfor文
// for(let i: number = 1; i <= 100; i++){
//   if(i % 2 === 1){ // iが奇数の時true
//     continue; // for文の先頭に戻る
//   }
//   console.log(i); // iが偶数の時実行される
// }
