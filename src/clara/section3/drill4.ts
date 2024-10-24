export default {};
// ④ コメントの指示の値をコンソールに表示してください
const member = {
  stageName: "Taeyong",
  birth: 1995,
  country: "South Korea"
};

// ここに何かしらを追加
const {stageName, birth} = member;

// 以下の行は変更せず、コンソールに "Taeyong" 1995 を表示してください
console.log(stageName, birth); // => "Taeyong" 1995