export default {};
// ネストしたオブジェクト
const nested = {
  num: 123,
  obj: {
    foo: "hello",
    bar: "world",
    baz: {
      pee: 1,
    },
  },
};

const {
  num,
  obj: {
    foo,
    baz: { pee },
  },
} = nested;
console.log(num); //123
console.log(foo); //"hello"
console.log(pee); //1
