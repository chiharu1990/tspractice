export default {};
// Mapオブジェクト
const map: Map<string,number> = new Map();
map.set("foo",1234);
console.log(map.get("foo")); //1234
console.log(map.get("bar")); //undefined

// Setオブジェクト
const set: Set<string> = new Set();
set.add("king");
set.add("queen");
console.log(set); //  { 'king', 'queen' }