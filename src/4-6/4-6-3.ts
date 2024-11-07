export default {};
// function map(array: number[], callback: (x: number) => number): number[] {
//   const arr: number[] = [];
//   for(let elm of array){
//     arr.push(callback(elm));
//   }

//   return arr;
// }

// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
// console.log(result);

// やりかけ未解決
// function map<T>(array: T[], callback: (x: T) => T): T[] {
//   const arr = [];
//   for(let elm of array){
//     arr.push(callback(elm));
//   }

//   return arr;
// }

// const data = [1, -3, -2, 8, 0, -1];
// const result: boolean[] = map(data, (x) => x >= 0);
// console.log(result);

// 答え
function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const arr: U[] = [];
  for (let elm of array) {
    arr.push(callback(elm));
  }

  return arr;
}

const data = [1, -3, -2, 8, 0, -1];
const result: boolean[] = map(data, (x) => x >= 0);
console.log(result);
