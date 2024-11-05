export default {};

// 配列の分割代入
// const arr = [1, 2, 4, 8, 16, 32];

// const [first, second, third] = arr;
// console.log(first); //1
// console.log(second); //2
// console.log(third); //4

// 分割代入を使って書かない場合
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// obj.arr[0]を変数fooに入れる
// const obj ={
//   arr: ["ichiban", "niban", "sanban"]
// }
// const {arr: [foo, baz, bar]} = obj;
// console.log(foo,baz,bar); //"ichiban"

// 変数nameにarr[0].nameが代入される
// const arr = [
//   {name: "kikuchi"},
//   {name: "yamada"}
// ]
// const [{name:name1},{name:name2}] = arr;
// console.log(name1,name2); // kikuchi,yamada

// 空白を用いて要素をスキップする
// 配列arrの1番目と3番目と5番目の要素を取得したいとき
const arr = [1, 2, 4, 8, 16, 32];

const [, foo, , bar, , baz] = arr;
console.log(foo); // 2
console.log(bar); // 8
console.log(baz); // 32

// タプル型に対して分割代入をする
const tuple: [string, number] = ["uhyo", 26];
// myNameはstgring型、ageはnumber型になる
const [myName, age] = tuple;
console.log(myName); //"uhyo" string型
console.log(age); // 26 number型
