export default {};
// オプショナルな引数の宣言（デフォルト値を指定しない場合）
// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//   if(upper){
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// }

// console.log(toLowerOrUpper("Hello")); // "hello"
// console.log(toLowerOrUpper("Hello", false)); // "hello"
// console.log(toLowerOrUpper("Hello",true)); // "HELLO"

// オプショナルな引数の宣言（デフォルト値を指定する場合）
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper("Hello")); // "hello"
console.log(toLowerOrUpper("Hello", false)); // "hello"
console.log(toLowerOrUpper("Hello", true)); // "HELLO"
