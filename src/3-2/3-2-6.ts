export default {};
// オプショナルなプロパティを宣言する
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
}

const obj: MyObj = {
  foo: false,
  bar: true
}
const obj2: MyObj = {
  foo: true,
  bar: false,
  baz: 1234
}

console.log(obj.baz); //undefined
console.log(obj2.baz); //1234

// 値がundefinedの可能性がある場合は、計算を行えない
// console.log(obj2.baz * 1000); 
// これはobj2.bazがundefinedの可能性があるため、計算が行えない
// obj2.baz' is possibly 'undefined'. のエラー

// undefinedの可能性を除外すれば計算ができる
if(obj2.baz !== undefined){
  console.log(obj2.baz * 1000); //1234000
}

