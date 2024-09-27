export default {};

const addResult = 1024 + 314 + 500;
console.log(addResult); //1838
const discounted = addResult * 0.7;
console.log(discounted); //1286.6

const sqrt2 = 2 ** 0.5;
console.log(sqrt2); //1.4142135623730951
console.log(sqrt2 - 1); //0.41421356237309515

console.log(18 / 12); //1.5
console.log(18n / 12n); //1n bigintは整数のみ扱われるため割り切れない場合などは切り捨てられる
console.log(18 % 12); //6
console.log(18n % 12n); //6n

// res1の肩はnumber型
const res1 = 5 - 1.86;
// res2の型はbigint型
const res2 = 2n ** 5n;

// 以下はコンパイルエラーになる
// const str: string = "123";
// console.log(str * 123);

// 演算子の優先順位
// ** が一番優先度が高く、その次が*,/.%で最後が+,-
// 同じ優先順位の演算子は左が優先される
console.log(5 - 3 - 1);  //1
console.log((5 - 3) - 1);  //1
console.log(5 - (3 - 1)); //3
