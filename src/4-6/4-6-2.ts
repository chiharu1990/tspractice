export default {};
const getFizzBuzzString = (i: number) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return i;
  }
};

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

const sequence = (num1: number, num2: number): number[] => {
  const arr: number[] = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
