export default {};
// FooBarBaz型はFooBar型の部分型
type FooBar = {
  foo: string;
  bar: number;
};
// FooBarは「fooプロパティがstring型であり、barプロパティがnumber型であるオブジェクトの型」

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};
// FooBarBaz型は「fooプロパティがstring型、barプロパティがnumber型、bazプロパティがboolean型のオブジェクトの型」
// これはFooBar型の条件も満たしている（FooBar型の上位互換である）
// よってFooBarBaz型の値はFooBar型の値としてもみなされる

const obj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false
};

const obj2: FooBar = obj; //FooBarBaz型はFooBar型の部分型となるので、コンパイルエラーにならない