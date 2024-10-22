export default {};
// ⑥ 処理を追加して、コメントの指示の値をコンソールに表示してください
const member = {
  stageName: "Taeyong",
  birth: 1995,
  country: "South Korea",
  position: ["Rapper", "Dancer"],
  group: [ "NCT U", "NCT127", "SuperM" ],
};

// ここに何かしらを追加
const {stageName, ...unit} = member;

// 以下の行は変更せず、コンソールに "Taeyong" を表示してください
console.log(stageName); // "Taeyong"

// 以下の行は変更せず、コンソールにコメントにある値を表示してください。
console.log(unit.position) //=> ["Rapper", "Dancer"]
console.log(unit.group) //=> [ "NCT U", "NCT127", "SuperM" ]