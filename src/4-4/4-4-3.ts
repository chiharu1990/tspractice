export default {};
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for(let i = 0; i < length; i++){
    result.push(element);
  }
  return result;
}

const result = repeat("a", 5);
// repeatの型はfunction repeat<string>(element: string, length: number): string[]となる