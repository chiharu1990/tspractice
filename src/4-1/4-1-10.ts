export default {};
// コールバック関数
// type User = { name: string; age: number; }
// const getName = (u: User): string => {
//   console.log("u is", u); // 1回目:u is { name: 'uhyo', age: 26 }、　2回目:u is { name: 'John Smith', age: 15 }
//   return u.name;
// }
// const users: User[] = [
//   {name: "uhyo", age: 26},
//   {name: "John Smith", age: 15},
// ]; 

// const names = users.map(getName);
// console.log(names); //[ 'uhyo', 'John Smith' ]

// 変数getNameを使わないようにする書き方
type User = { name: string; age: number; }
const users: User[] = [
  {name: "uhyo", age: 26},
  {name: "John Smith", age: 15},
]; 

const names = users.map((u: User): string => u.name);
console.log(names); //[ 'uhyo', 'John Smith' ]

// その他のメソッド
// 20歳以上のユーザーだけの配列
const adultUsers = users.filter((u: User) => u.age >= 20);
console.log(adultUsers); //[ { name: 'uhyo', age: 26 } ]
// すべてのユーザーが20歳以上ならtrue
const allAdult = users.every((u: User) => u.age >= 20);
console.log(allAdult); // false
// 60歳以上のユーザーが1人でもいたらtrue
const seniorExists = users.some((u: User) => u.age >= 60);
console.log(seniorExists); // false
// 名前がJhonで始まるユーザーを探して返す
const john = users.find((u: User) => u.name.startsWith("John"));
console.log(john); // { name: 'John Smith', age: 15 }