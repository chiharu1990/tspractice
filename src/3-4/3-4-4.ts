export default {};

type Animal = {
  name: string;
}
// Familyの2つの型引数ParentとChildはどちらもオプショナルな型引数
type Family<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  Child: Child;
}

// 通常通りの使い方
type S = Family<string,string>;
// TはFamily<Animal, Animal>と同じ
type T = Family;
// UはFamily<string,Animal>と同じ
type U = Family<string>;
// Uの場合は2つの型引数のうち1つのみ指定しているがこの場合は先（左）にある型引数を指定したことになる
// 右だけの指定は今のところできない

// オプショナルでない型引数とオプショナルな型引数を混ぜても問題ない
// type Family<Parent, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }

// extendsとオプショナルな型引数は両方同時に使うことも可能
// type Family<Parent extends HasName, Child extends HasName = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }