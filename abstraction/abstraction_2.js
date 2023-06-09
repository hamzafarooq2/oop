// -------------------------Abstarction in Function----
// In above example, the calculateArea function abstracts away the
// implementation details of calculating the area of a circle.
// The caller only needs to provide the radius as an input, and the
// function handles the calculation internally.
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483

//------------------------------Abstarction in Object---
// Here, the car object abstracts away the internal details of a car's
// brand, model, and the operations of starting and stopping. The caller
// can interact with the object using the exposed properties and methods
// without worrying about the implementation details.
let car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    // Code for starting the car
  },
  stop: function () {
    // Code for stopping the car
  },
};

car.start(); // Start the car

// -------------------------Abstraction in Classes
// In this example, we have an abstract Shape class with an abstract
// method calculateArea(). The Circle class extends the Shape class and
// provides its implementation of the calculateArea() method. The Shape
//  class acts as an abstraction, defining a common interface, while the
//   Circle class provides the specific implementation for calculating
//    the area of a circle.

class Shape {
  calculateArea() {
    // Abstract method, implementation left to derived classes
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.calculateArea());
