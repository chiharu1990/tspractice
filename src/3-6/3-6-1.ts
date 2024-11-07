export default {};
// オブジェクトの分割代入の基本的な例
// const {foo, bar} = obj;

// プロパティ名と別の名前の変数を使いたい時
// const {
//   foo, //obj.fooが代入される
//   bar: barVar, //obj.barが代入される
//   "foo bar": fooBar //obj["foo bar"]が代入される
// } = obj;

// 存在しないプロパティを分割代入で取得しようとするのはコンパイルエラー
const obj = {
  str: "hello,world!",
  num: 1234,
};

// const {foo} = obj; // エラー：Property 'foo' does not exist on type '{ str: string; num: number; }'.
