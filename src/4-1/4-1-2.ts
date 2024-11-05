export default {};
// 返り値のない関数
// function helloWorldNTimes(n: number): void {
//   for(let i = 0; i < n; i++){
//     console.log("Hello World!");
//   }
// }
// helloWorldNTimes(3);

// 早期リターン
function helloWorldNTimes(n: number): void {
  if (n >= 100) {
    // 100以上の数値が入力されたらループせずに別のメッセージを出す
    console.log(`${n}回なんて無理です！`);
    return;
  }
  for (let i = 0; i < n; i++) {
    console.log("Hello World!");
  }
}

helloWorldNTimes(150);
helloWorldNTimes(3);
