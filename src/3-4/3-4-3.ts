export default {};
// extends構文
type HasName = {
  name: string;
};
type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// Familyの2つの型引数Parent,Childはともにextends HasNameという制約を持っている
// Familyを使う際に与える型引数はHasNameの部分型でなければいけない

// これは制約を満たしていないためエラーになる
// Type 'number' does not satisfy the constraint 'HasName'.
// type T = Family<number,string>

// 次の場合はエラーとならない
// HumanやAnimalはHasNameの部分型だから
type Animal = {
  name: string;
};
type Human = {
  name: string;
  age: number;
};

// type T = Family<Animal,Human>;

// extendsの右に書く制約は、他の型引数も使うことができる
// Parentに渡される型はHasNameの部分型でなくてはならず、ChildはParentのさらに部分型でなければいけない
// type Family<Parent extends HasName, Child extends Parent> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }
// // これはOK
// type S = Family<Animal,Human>;
// // これはエラー(AnimalはHumanの部分型ではないから)
// type T = Family<Human,Animal> //Type 'Animal' does not satisfy the constraint 'Human'.
