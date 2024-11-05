export default {};
// 例1:HumanはAnimalの部分型
type Animal = {
  age: number;
};

type Human = {
  age: number;
  name: string;
};

// 部分型の条件
// Animalに存在するプロパティはHumanにも存在している
// HumanのageプロパティとAnimalのageプロパティの型か同じ
// よってHuman型はAnimal型の部分型であると言える
// これにより、Animal型のオブジェクトが必要な場面ではHuman型のオブジェクトを使ってもよいことになる

// 例2: HumanFamilyはAnimalFamilyの部分型
type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};

type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};

// AnimalFamilyに存在しているプロパティはHumanFamilyにも存在する（部分型の条件1）
// HumanFamilyのmotherプロパティはHuman型で、AnimalFamilyのmotherプロパティはAnimal型
// Human型はAnimal型の部分型なので、部分型の条件が一致していることになる（部分型の条件2）
// HumanFamily型のオブジェクトはAnimalFamily型のオブジェクトとしての条件も満たしている
