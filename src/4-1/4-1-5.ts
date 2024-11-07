export default {};
// アロー関数式の省略形
// type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = ({height, weight}:Human): number => weight / height ** 2;

// const uhyo: Human = {height: 1.84, weight: 72};
// console.log(calcBMI(uhyo));

// 返り値にオブジェクトリテラルを使いたいときは()で囲む
type Human = {
  height: number;
  weight: number;
};

type ReturnObj = {
  bmi: number;
};

const calcBMI = ({ height, weight }: Human): ReturnObj => ({
  bmi: weight / height ** 2,
});

// 以下はコンパイルエラー：A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// const calcBMI = ({height, weight}:Human): ReturnObj => {
//   bmi: weight / height ** 2
// };

const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));
