// oops - style of programming where we define classes and objects rather than functions and variables

// #region Objects and classes

  /*
  -- object is a collection of key value pairs { key: value }
  let circle = {
    radius: 1,
    color: "red",
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    }
  }
  console.log(circle.getArea());
  */

 // constructor function
 function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
      return Math.PI * this.radius * this.radius;  // 'this' correctly refers to the Circle instance
    };
  }
  let circle = new Circle(1);
  console.log(circle);  // Output: 3.141592653589793
   // this canbe written in class as well
  class CircleClass {
    constructor(radius) {
      this.radius = radius;
      this.getArea = this.#getArea();
      this.getCircumference = function() {
        return 2 * Math.PI * this.radius;
      }
    }
    #getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  let circleClass = new CircleClass(3);
  // we can add or access properties to the object by using dot notation and bracket notation
  circleClass.color = "red";  // like this we can add properties to the object by using dot notation
  circleClass["color"] = "blue";  // like this we can also add properties to the object by using bracket notation
  // similarly we can also delete properties from the object by using delete keyword
  delete circleClass.color; 
  console.log(circleClass);
  console.log(circleClass.getCircumference());

  // we generally create objects by 2 ways - 
  // 1. by calling a function that returns an object 
  // 2. by calling constructor function by using new keyword
  // both needs to be known as both are used in different ways
// #endregion

// #region types
 /*
 1. primitive types/value types  -- number, string, boolean, null, undefined, symbol, bigint
 2. reference types -- object, array, function
 -- how primitive types work
  let x = 10;
  let y = x;
  x = 20;
  console.log(y); // 10
  -- how reference types work
  let x = { value: 10 };
  let y = x;
  x.value = 20;
  console.log(y.value); // 20

  -- the conclusion is that primitive types are copied by value and reference types are copied by reference
 */
// #endregion

// #region OOPs concepts
/*

1. encapsulation - binding data/variables and methods that work on data together in an object
2. abstraction - showing necessary details and hiding implementation details -- remote control is a good example
3. inheritance - one class acquires the properties and methods of another class so that code can be reused and we can extend existing classes to create new ones
4. polymorphism - one interface, multiple implementations -- we can have same function with different parameters and different implementations

*/
// #endregion

// #region example of encapsulation
let employee = {
    name: "John",
    age: 30,
    city: "New York",
    // The Best functions/methods are those who does not have any parameters
    getDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

employee.getDetails();
// #endregion
