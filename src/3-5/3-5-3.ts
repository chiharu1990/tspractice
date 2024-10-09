export default {};
const arr : number[] = [1, 10, 100];
// これはコンパイルエラー
// const arr1: string[] = [123. -456] // エラー：Type 'number' is not assignable to type 'string'.

// 簡単な型の配列
const arr1: boolean[] = [false, true];
// 複雑な型の配列
const arr2 : Array<{
  name: string;
}> = [
  {name: "山田"},
  {name: "二宮"},
  {name: "菊池"}
];

// 異なる配列の型も表現可能
const arr3 = [100, "文字列", false]; // (string | number | boolean)[]型（型推論）