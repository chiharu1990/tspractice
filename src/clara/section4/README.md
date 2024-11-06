# 4章の振り返り問題
### 返り値の型注釈を省略した場合はどのような挙動になるか (省略しなかった場合とのメリット・デメリットを比較しながら説明すること)
関数の返り値の型注釈を省略した場合は、型推論される。  

テキスト見て追記分 ↓ 
関数の返り値の型注釈を明示する場合のメリット・デメリット  
[デメリット]
- 書く量が多くなる  
  - 短いコールバック関数などはどんな値が返るのかわかることが多いため型の情報は不要に感じられる  
[メリット]
- 関数の中身が長いときは返り値の値を明示する方がわかりやすい
- 関数内部で返り値の型に対して型チェックを働かせられる
- 返り値の型として宣言した型と違う型を返そうとしたとき、return文でエラーとなるため、実装ミスを未然に防ぐことができる

返り値の型注釈がある場合とない場合でコンパイルエラーの発生位置が変わる場合がある。    
型注釈がない場合、関数の中身から意図を読み取って型を推論するため、実装の中身を間違えてしまった時にもそれが”正しい”とされてしまう。返り値の型注釈がない場合は関数の中身が示す返り値の型を疑うことをしない。  

### コールバック関数の具体例を1つ書くこと
map関数に配列の各要素を渡してコンソールに表示する
```
const arr: number[] = [1,2,3,4,5];
arr.map((elm: number) => {
  return elm;
});
```
mapメソッドは新しい配列を返り値とするメソッドなので、返り値を使わない場合は非推奨である。

### 引数に2つの数値を受け取り、それを足し合わせた数値を返す関数を関数宣言を書くこと (引数・戻り値に型注釈をつけること)
```
function sum(num1: number,  num2: number):number {
  return num1 + num2;
}
```
### 上記と同じ関数を、関数式として書くこと
```
const sum = function(num1: number,  num2: number): number{
  return num1 + num2;;
}
```
### 上記と同じ関数を、アロー関数式として書くこと
```
const sum = (num1: number,  num2: number) : number => {
  return num1 + num2;
}
```
### コールシグネチャとは何か (具体例を含めて回答すること)
コールシグネチャはオブジェクト型の中で使用できる構文であり、`(引数リスト): 返り値の型`と書く  
コールシグネチャを用いることで「プロパティを持った関数」の型を表現することができる  
```
type MathType = {
  (a: number, b: number) : number;
}
const Add: MathType = (a, b) => {
  return a + b;
}
```
普通の関数型もコールシグネチャで表すことができる
次の型は同じ意味となる
```
type F = (arg: number) => number;
type E = {(arg: number) :number };
```
オブジェクト型がコールシグネチャを複数持つこともできる
```
type SwapFunc = {
  (arg: string): number; //引数をstringで渡すとnumber型が返る関数の型
  (arg: number): boolean; //引数をnumberで渡すとboolean型が返る関数の型
}
```
### ジェネリクスとは何か (具体例を含めて回答すること)
型引数を持った関数のこと 

テキスト見て追記分 ↓  
型引数を受け取る関数を作る機能のこと
型引数に何が入るのかは関数を呼び出す時に決まる  
型引数を持つ関数を宣言する時は関数名の後に`<型引数リスト>`という構文を付け足すのが基本の形  
型引数を持つ関数を呼び出すときは、`関数名<型引数>(引数)`として呼び出す  
型引数に何を当てはめるのかは、関数を使う側がその度に決めることができる
```
const sum = <T>(num1: T, num2: T) : T[] => {
  const arr: T[] = [];
  arr.push(num1,num2);
  return arr;
}

console.log(sum<number>(1, 2)); // [ 1, 2 ]
console.log(sum<string>("a", "b")); // [ 'a', 'b' ]
```
### オプショナル引数を使った関数の具体例を1つ書くこと
オプショナルな引数は渡してもいいし、渡さなくてもいい引数のこと  
`引数名?: 型`という構文を用いる  
オプショナル引数が省略された場合、その引数に入るのは`undefined`である  
デフォルト値を指定する場合は、`変数名: 型 = 式`という構文を用いる

```
// num2はオプショナル引数
const returnNumberArray = (num1: number, num2?: number) : number[] => {
  const arr: number[] = [];
  if(num2 === undefined) {
    arr.push(num1);
  } else {
    arr.push(num1,num2);
  }
  return arr;
}

console.log(sum(1)); // [ 1 ]

// num2のデフォルト値は0
const sum = (num1: number, num2: number = 0) : number[] => {
  const arr: number[] = [];
  if(num2 === 0) {
    arr.push(num1);
  } else {
    arr.push(num1,num2);
  }
  return arr;
}

console.log(sum(1)); // [ 1 ]
console.log(sum(1,3)); // [ 1, 3 ]

```