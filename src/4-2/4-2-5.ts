export default {};
// MyFunc型は、boolean型のプロパティisUsedを持つオブジェクトであると同時に、number型を受け取る関数でもある
type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};

// doubleはisUsedプロパティを持つ
double.isUsed = true;
console.log(double.isUsed); // true

// doubleは関数として呼び出せる
double(1000); // 2000

// 普通の関数型もコールシグネチャで表すことができる
// 型FとGは同じ意味
type F = (arg: string) => number;
type G = { (arg: string): number };

// オブジェクト型がコールシグネチャを複数持つことも可能
type SwapFunc = {
  (arg: string): number;
  (arg: number): boolean;
};
