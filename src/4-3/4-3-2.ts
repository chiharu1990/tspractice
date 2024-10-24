export default {};
type HasName = {
  name: string;
}
type HasNameAge = {
  name: string;
  age: number;
}

const showName = (obj: HasName) => {
  console.log(obj.name);
};
const g: (obj: HasNameAge) => void = showName;
g({
  name: "uhyo",
  age: 26,
});