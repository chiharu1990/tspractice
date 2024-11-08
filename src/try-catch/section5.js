export default {};
// 文字列を反転する関数
function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError(`${str} is not a string`);
  }
  return Array.from(str).reverse().join("");
}

try {
  // 数値を渡す
  reverseString(100);
} catch (error) {
  console.log(error instanceof TypeError); // => true
  console.log(error.name); // => TypeError
  console.log(error.message); // => 100 is not a string
}
