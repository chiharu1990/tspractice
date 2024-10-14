export default {};
// 正規表現 replaceメソッド
console.log("Hello, abbbbbbc world! abbbc".replace(/ab+c/, "foobar")); // Hello, foobar world! abbbc
console.log("Hello, abbbbbbc world! abbbc".replace(/ab+c/g, "foobar")); // Hello, foobar world! foobar

// matchメソッド
// const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
// if(result !== null){
//   console.log(result[0]); // abbbbbbc
//   console.log(result[1]); // bbbbbb
// }

// 名前付きキャプチャリンググループ
// const result = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
// if(result !== null){
//   console.log(result.groups); //  { worldName: 'bbbbbb' }
// }

// matchメソッド gフラグを持っている場合

const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/g);
if(result !== null){
  console.log(result); // [ 'abbbbbbc', 'abc' ]
}