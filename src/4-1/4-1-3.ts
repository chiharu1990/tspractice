export default {};
// 関数式で関数を作る
type Human = {
  height: number;
  weight: number;
};
// const calcBMI = function(human: Human): number {
//   return human.weight / human.height ** 2;
// };
// const uhyo: Human = {
//   height:  1.84,
//   weight: 72
// }

// console.log(calcBMI(uhyo));

// 関数の引数に対して分割代入をする
const calcBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};
const uhyo: Human = {
  height: 1.84,
  weight: 72,
};

console.log(calcBMI(uhyo));
