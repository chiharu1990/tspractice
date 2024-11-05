export default {};
// タプル型
let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -555];
const str = tuple[0]; //strはstring型
const num = tuple[1]; //numはnumber型
// const nothing = tuple[2]; //エラー：Tuple type '[string, number]' of length '2' has no element at index '2'.

// ラベル付きタプル型
type User = [name: string, age: number];

const uhyo: User = ["uhyo", 26];
console.log(uhyo[1]); // 26

// コラム13 配列のインデックスアクセスで型と実際の値が食い違う現象が起き得る例
// const arr = [1, 10, 100];
// const num: number = arr[100];
// console.log(num); //numの型はnumber型なのに対して、undefinedが表示される
