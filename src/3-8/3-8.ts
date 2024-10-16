export default {};
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
john Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];

// 改行を除外
const splitArr = data.split("\n");
// console.log(splitArr); //[ '', 'uhyo,26,1', 'john Smith,17,0', 'Mary Sue,14,1', '' ]

// 配列の最初と最後の空白を除外
for(const splitArr2 of splitArr){
  if(splitArr2 === ""){
    continue;
  } else {
    const splitArr3 = splitArr2.split(",");
    // ここから自力でできなかったところ
    const [name, ageString, premiumUserString] = splitArr3;
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1";
    users.push({name, age, premiumUser});
  }
}
console.log(users);

for(const user of users){
  if(user.premiumUser){
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
  }
}