export default {};
// function関数式で関数の名前がない時はfunctionの直後に型引数リストを書く
const repeat = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

// アロー関数式の場合は引数リストの前に型引数リストを書く
const repeat2 = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

// メソッド記法の場合もメソッド名のあと・引数リストの前に書く
const utils = {
  repeat3<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  },
};

// 型引数リストが複数の場合はコンマで型引数を区切る
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
const p = pair<string, number>("uhyo", 26);

// extendsやオプショナル型引数は関数の型引数でも同様に使用可能
const repeat4 = <
  T extends {
    name: string;
  },
>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

// これはOK
console.log(
  repeat4<HasNameAndAge>(
    {
      name: "uhyo",
      age: 26,
    },
    3
  )
);

// これはコンパイルエラー
// console.log(repeat4<string>("a",5)); // エラー：Type 'string' does not satisfy the constraint '{ name: string; }'.
// 与えられたstringという型は{name: string;}の部分型であるという条件を満たしていない
