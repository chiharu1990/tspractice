export default {};
const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

const result = 5n / 2n;
console.log(result);

// bigintとnumberを混ぜて使うことはできない
// const wrong = 100n + 50;
// console.log(wrong);
