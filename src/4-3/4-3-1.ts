export default {};
type HasName = {
  name: string;
}
type HasNameAge = {
  name: string;
  age: number;
}

const fromAge = (age: number): HasNameAge => ({
  name: "John Smith",
  age,
});

const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);

console.log(obj);// { name: 'John Smith', age: 100 }

// どんな型を返す関数型も（同じ引数を受け取って）void型を返す関数型の部分型として扱われる
// const f = (name: string) => ({name});
// const g: (name: string) => void = f;
