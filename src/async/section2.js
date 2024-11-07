export default {};
function taskA() {
  console.log("タスクAを実行 at" + Date.now());
}
function taskB() {
  console.log("タスクBを実行 at" + Date.now());
}
function taskAsync() {
  console.log("非同期のタスクを実行 at" + Date.now());
}

taskA();
setTimeout(() => {
  taskAsync();
}, 1000);
taskB();
