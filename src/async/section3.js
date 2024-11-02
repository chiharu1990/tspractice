export default {};
function taskA () {
  console.log("タスクAを実行 at" + Date.now());
}
function taskB () {
  console.log("タスクBを実行 at" + Date.now());
}
function taskAsync () {
  console.log("非同期のタスクを実行 at" + Date.now());
}

// 指定したtimeoutミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout){
  // 現在の時間をUnix時間（1970年1月1日午前0時0分0秒から経過した時間）で返してstartTimeに代入する
  const startTime = Date.now();
  // timeoutミリ秒経過するまで無限ループをする
  while(true){
    const diffTime = Date.now() - startTime;
    if(diffTime >= timeout){
      return; // 指定時間経過したら関数の実行を終了
    }
  }
}

const startTime = Date.now();
taskA();
// 10ミリ秒後にコールバック関数を呼び出すようにタイマーに登録する
setTimeout(() => {
  const endTime = Date.now();
  taskAsync();
  console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
blockTime(1000);
taskB();