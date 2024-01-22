// We will use a function to create prototypal inheritance.
// We will start by implementing a User function expression.
// Remember to always start the name of a constructor function
// with capital letter (standard convention).

function User(name) {
  this.name = name;
  // never create function inside constructor function
  this.printName = function () {
    console.log(this.name);
  };

  console.log(this);
}
let hamza = new User("hamza");
