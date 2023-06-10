const obj1 = {
  name: "Hamza",
  sport: "Sccoer",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

const obj2 = {
  name: "Ali",
  age: "25",
  __proto__: obj1,
};

const obj3 = {
  school: "TPS",
  __proto__: obj2,
};

console.log(obj2.sport);
console.log(obj2.getName());
console.log(obj2.getAge());
console.log(obj2.__proto__.getName());

console.log(obj3.name);
console.log(obj3.sport);

// ----------------------------------------in Array

const fruits = ["apple"];
Array.prototype.selfMade = function () {
  return "selfMade prototype function";
};

console.log(fruits.selfMade());

//---------------------------------------in Function

function MyName(name) {
  // our made constructor
  this.name = name;
}

MyName.prototype = obj1;

const myproto = new MyName("Hamza");
console.log(myproto.sport);
