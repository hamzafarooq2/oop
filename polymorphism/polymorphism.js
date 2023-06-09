// In this example, we have an Animal superclass with a makeSound method.
// The Dog and Cat subclasses extend the Animal class and override the
// makeSound method with their own implementations. When we call the
// makeSound method on instances of Dog and Cat, the respective overridden
// methods are executed.

class Animal {
  makeSound() {
    console.log("Animal is making a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog is barking.");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat is meowing.");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.makeSound(); // Output: Animal is making a sound.
dog.makeSound();    // Output: Dog is barking.
cat.makeSound();    // Output: Cat is meowing.

//------------------------------------------
console.log("---------------------------------")

// In this example, the Calculator class has two add methods, one that 
// takes two arguments and another that takes three arguments. JavaScript
// doesn't differentiate between these methods based on the number of
// arguments, so the second method declaration will override the first.
// As a result, when we call the add method with three arguments,
// the overridden method with three parameters will be executed.

class Calculator {
  add(a, b) {
    return a + b;
  }

  add(a, b, c) {
    return a + b + c;
  }
}

const calculator = new Calculator();

console.log(calculator.add(2, 3));       // Output: 5

console.log(calculator.add(2, 3, 4));    // Output: 9




