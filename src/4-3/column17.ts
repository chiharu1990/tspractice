export default {};
type HasName = {name: string};
type HasNameAndAge = {name: string; age: number};
type Obj = {
  func: (arg: HasName) => string;
  method(arg: HasName): string;
}

const something: Obj = {
  func: user => user.name,
  method: user => user.name,
}

const getAge = (user: HasNameAndAge) => String(user.age);

// エラー：Type '(user: HAsNameAndAge) => string' is not assignable to type '(arg: HasName) => string'.
// something.func = getAge;
// これはエラーが発生しない
something.method = getAge;