export default {};
type PriceData = {
  [key: string]: number;
}

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
}

// dataにchickenのプロパティを作って代入することができる
data.chicken = 250;

// data.弁当 = "foo"; //Type 'string' is not assignable to type 'number'.のエラー
// プロパティはnumber型として宣言されているのでコンパイルエラーとなる


// コラム9 インデックスシグネチャの罠
// type MyObj = { [key:string] : number};
// const obj:MyObj = {foo: 123};
// const num: number = obj.bar;

// console.log(num); //undefined

// 動的なプロパティ名の型がstringだったときにオブジェクトリテラルの型がインデックスシグネチャを持つ
const propName: string = "foo";

// objは{ [x: string]: number }型となり、インデックスシグネチャを持つ
const obj = {
  [propName] : 123
}

console.log(obj.num); //123