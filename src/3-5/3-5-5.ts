export default {};
// pushメソッドを使って要素を追加する
const arr = [1, 10, 100];
arr.push(1000);
console.log(arr); // [ 1, 10, 100, 1000 ]

// arrはnumber型を持っているため、number型以外の値はコンパイルエラーとなる
// arr.push("foo bar"); // エラー：Argument of type 'string' is not assignable to parameter of type 'number'.

// 配列の中身を変更するメソッドは読み取り専用の配列型に対して使うとエラーになる
const arr1: readonly number[] = [1, 10, 100];
// arr1.push(1000); //エラー：Property 'push' does not exist on type 'readonly number[]'.

// includesメソッド
console.log(arr.includes(100)); //true
console.log(arr.includes(50)); //false

// これはコンパイルエラーとなる(arrの配列の型がnumber型のため)
// console.log(arr.includes("文字列"))// エラー：Argument of type 'string' is not assignable to parameter of type 'number'.
