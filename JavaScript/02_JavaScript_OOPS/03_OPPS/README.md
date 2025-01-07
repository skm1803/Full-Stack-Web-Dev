# Javascript OOPS

## Classes and Inheritance in JavaScript

## **Introduction**

JavaScript `class` syntax, introduced in ES6, provides a cleaner and more intuitive way to define and create objects and manage inheritance. While JavaScript remains prototype-based under the hood, the `class` syntax abstracts much of this complexity.

---

## **Classes**

A class is essentially a blueprint for creating objects. It can include properties and methods to define object behavior.

### **Defining a Class**

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age; // Instance property
  }

  // Method
  sayHello() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of the class
const person1 = new Person("Alice", 25);
console.log(person1.sayHello()); // Output: Hi, my name is Alice and I am 25 years old.
```

### **Static Methods**

Static methods belong to the class itself, not to the instances.

```javascript
class MathUtility {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtility.add(5, 3)); // Output: 8
```

---

## **Inheritance**

Inheritance allows a class (child class) to acquire properties and methods of another class (parent class).

### **Creating a Subclass**

Use the `extends` keyword to create a subclass.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent class's constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name}, a ${this.breed}, barks.`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // Output: Buddy, a Golden Retriever, barks.
```

### **Key Points in Inheritance**

1. The `super` keyword is used to call the parent class's constructor or methods.
2. Subclasses can override parent class methods.

---

## **Encapsulation**

Encapsulation refers to bundling data (properties) and methods that operate on the data into a single unit (class) and restricting direct access to some of the object's components.

### **Private Fields and Methods**

JavaScript supports encapsulation through private fields and methods using the `#` syntax.

```javascript
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
```

---

## **Abstraction**

Abstraction involves hiding implementation details and showing only essential information to the user.

In JavaScript, abstraction can be achieved by:

1. Using private fields and methods.
2. Providing a clear interface through public methods.

### **Example**

```javascript
class Vehicle {
  constructor(type, fuel) {
    this.type = type;
    this.fuel = fuel;
  }

  start() {
    return `Starting the ${this.type} with ${this.fuel}.`;
  }
}

class Car extends Vehicle {
  constructor(fuel) {
    super("Car", fuel);
  }

  drive() {
    return `Driving the car.`;
  }
}

const myCar = new Car("petrol");
console.log(myCar.start()); // Output: Starting the Car with petrol.
console.log(myCar.drive()); // Output: Driving the car.
```

---

## **Polymorphism**

Polymorphism allows the same method to behave differently based on the object that calls it. This is often achieved through method overriding.

### **Example**

```javascript
class Animal {
  speak() {
    return "This animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

class Cat extends Animal {
  speak() {
    return "The cat meows.";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.speak());
});
// Output:
// This animal makes a sound.
// The dog barks.
// The cat meows.
```

---

## **Advantages of OOP Concepts**

1. **Encapsulation**: Protects the internal state of an object.
2. **Abstraction**: Simplifies complex systems by exposing only the necessary components.
3. **Polymorphism**: Promotes flexibility and reusability in code.
4. **Inheritance**: Facilitates code reuse and hierarchy representation.

---

## **Modern Features**

### **Private Fields and Methods**

Private fields and methods, introduced in ES2021, are accessible only within the class.

```javascript
class Example {
  #privateField = 42; // Private field

  #privateMethod() {
    return "This is private";
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const instance = new Example();
console.log(instance.publicMethod()); // Output: This is private
console.log(instance.#privateField); // Error: Private field '#privateField' must be declared in an enclosing class
```

# Getters and Setters in JavaScript

## **Introduction**

Getters and setters are special methods in JavaScript that allow you to define custom behavior for accessing (getting) and setting object properties. These methods provide controlled access to an object's properties and allow additional logic to be executed when a property is accessed or modified.

---

## **Defining Getters and Setters**

Getters are defined using the `get` keyword, and setters are defined using the `set` keyword.

### **Syntax**

```javascript
class Example {
  constructor(value) {
    this._property = value; // Convention: Use an underscore for internal properties
  }

  // Getter
  get property() {
    return this._property;
  }

  // Setter
  set property(value) {
    if (value > 0) {
      this._property = value;
    } else {
      console.error("Value must be greater than 0.");
    }
  }
}

const obj = new Example(10);
console.log(obj.property); // Access using getter: 10

obj.property = 20; // Update using setter
console.log(obj.property); // Output: 20

obj.property = -5; // Invalid value
// Output: Value must be greater than 0.
```

---

## **Advantages of Getters and Setters**

1. **Encapsulation:**

   - They allow controlled access to private or protected properties of an object.
   - You can encapsulate the internal representation and expose only the desired behavior.

2. **Validation:**

   - Setters can validate the input before updating the property, ensuring data integrity.

3. **Computation on Access:**

   - Getters allow you to compute or transform a value when it's accessed.

4. **Read-Only Properties:**
   - You can define properties with only getters to make them read-only.

---

## **Example: Calculated Properties**

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for area (adjust height while keeping width constant)
  set area(value) {
    this.height = value / this.width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50 (calculated using getter)

rect.area = 100; // Update area using setter
console.log(rect.height); // Output: 10 (adjusted height)
```

---

## **When to Use Getters and Setters**

- When you want to **encapsulate** and control how properties are accessed or modified.
- When you need **validation** or transformation during updates.
- When properties should **depend on other properties** (e.g., computed values).
- To create **read-only properties** by defining only getters.

---
