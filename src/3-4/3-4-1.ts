export default {};
// 型引数Tを持つUser型を宣言している
type User<T> = {
  name: string;
  child: T;
};
// 「User<T>型はnameプロパティがstring型であり、childプロパティはT型であるオブジェクトの型」ということになる

//  型引が複数ある場合
type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
