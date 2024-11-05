export default {};
// 返り値の型注釈がある場合とない場合でコンパイルエラーの発生位置が変わる場合がある
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

const arr = range(5, 10);
for (const value of arr) console.log(value);

// 関数内のreturn result;を書き忘れた時、rangeの宣言部分でコンパイルエラーとなる
// function range(min: number, max: number): number[] { // エラー発生箇所
//   const result = [];
//   for(let i = min; i <= max; i++){
//     result.push(i);
//   }
// }

// const arr = range(5,10);
// for(const value of arr) console.log(value);
// エラー：A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// このエラーは「返り値の方注釈がvoidでもanyでもない関数は値を返す必要がある」という意味
// 返り値がnumber[]型であると明記しているのにrangeが何も返り値を返していないよ、とTypeScriptが検出してくれている

// rangeに返り値の型注釈が書かれていない場合、エラーは別の場所で発生する
// function range(min: number, max: number) {
//   const result = [];
//   for(let i = min; i <= max; i++){
//     result.push(i);
//   }
// }

// const arr = range(5,10);
// for(const value of arr) console.log(value); // エラー発生箇所
// エラー：Type 'void' must have a '[Symbol.iterator]()' method that returns an iterator.
// arrはvoid型であり、イテレータではないのでfor-of文でループすることはできない、という意味
// 今回rangeは型推論により、void型と推論される
