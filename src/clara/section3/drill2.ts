export default {};
// result がコメント内の形となるように書いてください。
const arr1 = ["one", "two", "three"];
const arr2 = ["four", "five", "six"];

// result が以下となるように書き換えてください。
// [ "zero", "one", "two", "three", "four", "five", "six" ]
const result = ["zero", ...arr1, ...arr2];

// 以下の行は変更しない
console.log(result);
