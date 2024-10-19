export default {};
// アロー関数式
type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({height, weight}:Human): number => {
  return weight / height ** 2;
};

const uhyo: Human = {height: 1.84, weight: 72};
console.log(calcBMI(uhyo));
