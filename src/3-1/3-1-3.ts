export default {};
// プロパティ名には文字列リテラルを使用することができる
const obj = {
  "foo" : 123,
  "foo bar": -500,
  '↑↓↑↓': "文字列"
};
console.log(obj.foo) //123
console.log(obj["foo bar"]) //-500
console.log(obj["↑↓↑↓"]) //"文字列"

//数値リテラルも使用することができる
const obj2 = {
  1: "one",
  2.05: "tow point o five"
}

console.log(obj2["1"]) //"one"
console.log(obj2["2.05"]) //"tow point o five"

// 計算されたプロパティ名
const propName = "foo"
const obj3 = {
  [propName]: 123
}
console.log(obj3.foo) //123