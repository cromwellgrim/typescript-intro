const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1.name = user2.name;
user1.id = 1000;

function constFunction() {
  const myList = [1, 2, 3];
  myList.push(4);
  console.log(myList);
}
constFunction();

function constChangeObject() {
  let obj1 = { p1: "p1value" };
  console.log(obj1);
  obj1 = { p1: "p1value changed" };
  console.log(obj1);
  const obj2 = { p2: "p2value" };
  console.log(obj2);
  // obj2 = { p2: "does not compile" };
  obj2.p2 = "Work!";
  console.log(obj2);
}
constChangeObject();

