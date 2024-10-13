export default {};
// オブジェクトのrestパターン
// const {foo, ...restObj} = obj;

const obj = {
  foo: 123,
  bar: "string",
  baz: false
};

const {foo, ...restObj} = obj;
console.log(foo); // 123
console.log(restObj) // { bar: 'string', baz: false }
// restObjはobjからプロパティfooを取り除いだ新しいオブジェクト
// restObjの値を変更しても、元のobjには影響しない
restObj.bar = "aaa";
console.log(restObj.bar); // "aaa"
console.log(obj.bar); // "string"

// 配列のrestパターン
const arr = [1, 1, 2, 3, 5, 7, 13];
const [first,second,third, ...rest] = arr;
console.log(first); // 1
console.log(second); // 1
console.log(third); // 2
console.log(rest); // [3, 5, 7, 13]
