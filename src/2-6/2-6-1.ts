export default {};

//FizzBuzz
//3の倍数でもなく、5の倍数でも無い時は整数をそのまま出力する
//3の倍数であり、5の倍数でない時はFizzを出力する
//3の倍数でなく、5の倍数の時はBuzzを出力する
//3の倍数であり、5の倍数の時はFizzBuzzを出力する

// for文とif文
// const FizzBuzz = (num:number) => {
//   for(let i = 1; i <= num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log("FizzBuzz");
//       continue;
//     }else if(i % 3 === 0){
//       console.log("Fizz");
//       continue;
//     }else if(i % 5 === 0){
//       console.log("Buzz");
//       continue;
//     } 
//     console.log(i);
//   }
// };

// while文とswitch文
// let i = 1;
// const FizzBuzz = (num:number) => {
//   while(i <= num){
//     switch(true){
//       case (i % 3 === 0 && i % 5 === 0):
//         console.log("FizzBuzz");
//         i++;
//         break;
//       case (i % 3 === 0 && !(i % 5 === 0)):
//         console.log("Fizz");
//         i++;
//         break;
//       case (!(i % 3 === 0) && i % 5 === 0):
//         console.log("Buzz");
//         i++;
//         break;
//       default: 
//       console.log(i);
//       i++;
//     }
//   }
// }


//結果を1行にまとめて表示する
let result = "";
const FizzBuzz = (num:number) => {
  for(let i = 1; i <= num; i++){
    if(i > 1){
      result += " ";
    }
    if(i % 3 === 0 && i % 5 === 0){
      result += "FizzBuzz";
      continue;
    }else if(i % 3 === 0){
      result += "Fizz";
      continue;
    }else if(i % 5 === 0){
      result += "Buzz";
      continue;
    } 
    result += String(i);
  }
  console.log(result);
};


FizzBuzz(100);