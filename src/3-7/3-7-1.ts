import { time } from "console";

export default {};
// Dateオブジェクト
// const d = new Date();
// console.log(d); // 現在の日付と日時が表示される（2024-10-14T12:25:48.239Z）
// getfullYearメソッドで西暦を取得したり、getMonthで月を取得したりといった方法で日時データの中身を得ることができる
// console.log(d.getFullYear()); //2024
// console.log(d.getMonth()) // 9

//setFullYearメソッドで日時データを書き換えることができる
// console.log(d.setFullYear(2030));
// console.log(d); // 2030-10-14T12:24:07.924Z

// ISO 8601形式をDateオブジェクトに変換する
// const d = new Date("2020-02-03T15:00:00+09:00");
// console.log(d); // 2020-02-03T06:00:00.000Z
// DateオブジェクトのtoISOStringメソッドでISO 8601形式に変換することができる
// console.log(d.toISOString()) //2020-02-03T06:00:00.000Z

// 数値による表現の例
const date = new Date("2020-02-03T15:00:00+09:00");
const timeNum = date.getTime();
console.log(timeNum); //1580709600000

const date2 = new Date(timeNum);
console.log(date2); // 2020-02-03T06:00:00.000Z

// Date.nowメソッドで減災時刻を数値表現で得る
console.log(Date.now()); // 1728910835843
console.log(new Date().getTime()); // 1728910835843