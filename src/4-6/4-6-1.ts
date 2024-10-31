export default {};
// for(let i = 1; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   } else if(i % 3 === 0){
//     console.log("Fizz");
//   } else if(i % 5 === 0){
//     console.log("Buzz");
//   } else{
//     console.log(i);
//   }
// }

// FizzBuzzのfor文の中身を関数にする
const getFizzBuzzString = (i: number): string => {
  if(i % 3 === 0 && i % 5 === 0){
    return "FizzBuzz"
  } else if(i % 3 === 0){
    return "Fizz";
  } else if(i % 5 === 0){
    return "Buzz";
  } else{
    return String(i);
  }
}

// for(let i = 1; i <= 100; i++){
//   const message = getFizzBuzzString(i)
//   console.log(message);
// }

const sequence = (num1: number, num2: number): number[] => {
  const arr: number[] = [];
  for(let i = num1; i <= num2; i++){
    arr.push(num1++);
  }
  return arr;
}

for(const i of sequence(1, 100)){
  const message = getFizzBuzzString(i)
  console.log(message);
}