export default {};
type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

const bin: BinaryFunc = double;
console.log(bin(10,100)); // 20
