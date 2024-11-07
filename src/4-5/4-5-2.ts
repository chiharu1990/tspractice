export default {};
// function sabayomi(age: number){
//   if(age >= 20){
//     const lie = age - 5;
//     return lie;
//   }
//   // 変数lieは関数スコープではなくその内側のブロックの中で宣言されているため、ブロックスコープに属することになるためエラーになる
//   console.log(lie); // エラー：Cannot find name 'lie'.
//   return age;
// }

// ブロックを分ければ同じ変数名を複数回登場させることもできる
function sabayomi(age: number) {
  if (age >= 30) {
    const lie = age - 10;
    return lie;
  }
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  return age;
}

// for文の( )の中で変数を宣言した場合、その変数は「for文の中のみ」という特殊なスコープを持つ
function sum(arr: number[]) {
  let result = 0;
  // 変数iはfor文の中のみのスコープに存在する
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  // 変数iはfor文の中のみなのでアクセスできない
  // console.log(i); // エラー：Cannot find name 'i'.
  return result;
}
