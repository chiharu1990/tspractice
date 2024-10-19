export default {};
const obj = {
  // メソッド記法
  double(num: number): number {
    return num * 2;
  },
  // 通常の記法
  double2: (num: number) => num * 2,
}

console.log(obj.double(100)); // 200
console.log(obj.double2(-50)) // -100