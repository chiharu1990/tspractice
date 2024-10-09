export default {};
// 読み取り専用配列型
const arr: readonly number[] = [1, 10, 100];
// 配列arrは読み取り専用なので内容を書き換えようとするとエラーになる
// arr[1] = -500; //エラー：Index signature in type 'readonly number[]' only permits reading.