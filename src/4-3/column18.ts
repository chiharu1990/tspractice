export default {};
// 読み取り専用配列型を受け取る関数の例
// function sum(nums: readonly number[]): number {
//   let result = 0;
//   for(const num of nums) {
//     result += num;
//   }
//   return result;
// }

// // sumにはreadonly number[]型を与えることができる
// const nums1: readonly number[] = [1, 10, 100];
// console.log(sum(nums1)); // 111

// // sumにはnumber型[]も与えることができる
// const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
// console.log(sum(nums2)); // 20

// 普通の配列型を受け取る関数の例
// function fillZero(nums: number[]): void {
//   for(let i = 0; i< nums.length; i++){
//     nums[i] = 0;
//   }

// }

// // fillZeroにはnumber[]型を与えることができる
// const nums1: number[] = [1, 10, 100];
// console.log(fillZero(nums1)); // [0, 0, 0]

// // fillZeroにreadonly number[]型を与えるのはコンパイルエラー
// const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
// console.log(fillZero(nums2));
// // エラー：rgument of type 'readonly number[]' is not assignable to parameter of type 'number[]'.
// // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

// オブジェクトの読み取り専用プロパティの型について
type User = { name: string };
type ReadonlyUser = { readonly name: string };

const uhyoify = (user: User) => {
  user.name = "uhyo";
};

const john: ReadonlyUser = {
  name: "john Smith",
};

// これはコンパイルエラー（john.nameはreadonlyなので）
// john.name = "Nanashi"; // エラー：Cannot assign to 'name' because it is a read-only property.

// これはエラーにならない
uhyoify(john);
console.log(john.name); // "uhyo"と表示され、上書きされてしまっている
