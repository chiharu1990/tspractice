export default {};
// ③ result がコメント内の形となるように書いてください。
const member = {
  stageName: "Taeyong",
  birth: 1995,
  country: "South Korea",
};

// member オブジェクトの内、
// プロパティ stageName の値が "TY" となっているオブジェクトとなるよう
// 以下を書き換えてください。
// 完成形:
// { stageName:"TY", birth: 1995, country: "South Korea" }
const result = {...member,  stageName: "TY"};

// 以下の行は変更しない
console.log(result); // => { stageName:"TY", birth: 1995, country: "South Korea" }