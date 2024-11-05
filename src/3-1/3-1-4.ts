export default {};
// プロパティに代入する
const user = {
  name: "uhyo",
  age: 25,
};

user.age = 26;
console.log(user.age); //26

//プロパティ名を動的に決める
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messeges = {
  good: "0以上の値が入力されました",
  bad: "負の数値を入力しないでください",
};

rl.question("数値を入力してください", (line) => {
  const num = Number(line);
  console.log(messeges[num >= 0 ? "good" : "bad"]);
  rl.close();
});
