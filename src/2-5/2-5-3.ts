export default {};
let userName = "";
if(userName  !== ""){
  console.log("名前があるよ！")
} else {
  console.log("名前を入力してください")
  userName = "名無し";
}

// else ifを使う
const num = 0;
if(num < 0){
  console.log("numは負の数です");
} else if(num === 0){
  console.log("numは0です");
} else{
  console.log("numは正の数です");
}

// else ifを使わないとこう
if(num < 0){
  console.log("numは負の数です");
} else {
  if(num === 0){
    console.log("numは0です");
  } else {
    console.log("numは正の数です");
  }
}
