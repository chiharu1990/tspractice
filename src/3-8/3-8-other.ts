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

// 3.8の別解
const users: User[] = data.split("\n")
  .filter(line => line !== "")
  .map(line => {
    const [name, ageString, premiumUserString] = line.split(",");

    return {
      name,
      age: Number(ageString),
      premiumUser: premiumUserString === "1"
    };
  })

for(const user of users){
  if(user.premiumUser){
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
  }
}