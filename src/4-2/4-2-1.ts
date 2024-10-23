export default {};
// 関数型を型推論で調べてみる
// const xRepeat = (num :number):string => "x".repeat(num);
// xRepeatの型は(num: number) => string型

type F = (repeatNum: number) => string;
const xRepeat: F = (num: number): string => "x".repeat(num);

// 次の場合はコンパイルエラーとなる
// type F2 = (arg: string, arg2: string) => boolean;
// const fun: F2 = (num: number): void => console.log(num); //Type '(num: number) => void' is not assignable to type 'F2'.