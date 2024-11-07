export default {};
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

console.log(repeat<string>("a", 5)); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(repeat<number>(123, 3)); // [ 123, 123, 123 ]
