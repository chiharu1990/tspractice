export default {};
type MyObj = {
  readonly foo: number;
}
const obj: MyObj = {foo: 123};
// obj.foo = 0; //Cannot assign to 'foo' because it is a read-only property.のエラー