export default {};
// 1から100まで出した和を表示するプログラム
let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum);

// break文を使う
while (true) {
  // 終了条件がない(永遠に実行される)
  if (i <= 100) {
    break;
  }
  sum += i;
  i++;
}

// continue文
while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    // iが奇数の時true
    continue; // 実行されたらwhile文の先頭に戻る
  }
  console.log(i); // iが偶数の時に実行される
}
