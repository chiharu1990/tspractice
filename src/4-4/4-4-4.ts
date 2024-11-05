export default {};
const repeat = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};
// repeat関数の型は<T>(element: T, length: number) => T[]

// このようにrepeatを宣言しても今までと同様に使うことができる
type Func = <T>(arg: T, num: number) => T[];

const repeat2: Func = (element, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};
