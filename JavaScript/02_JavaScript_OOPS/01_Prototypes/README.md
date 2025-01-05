# Prototypes in JavaScript

## **Definition**

Prototypes in JavaScript are a mechanism by which objects can inherit properties and methods from other objects. Every JavaScript object has an internal property called `[[Prototype]]`, which links to another object. This prototype chain forms the basis of inheritance in JavaScript.

---

## **Key Concepts**

### **1. Prototype Property (`prototype`)**

- The `prototype` is a special property of functions in JavaScript.
- It's used to define properties and methods that should be shared among all instances of objects created by that function (constructor).

### **2. Prototype Chain**

- When a property or method is accessed on an object, JavaScript first looks at the object itself.
- If it doesn't find it, it looks up the `[[Prototype]]` chain until it finds the property or reaches the end (`null`).

### **3. Object Inheritance**

- Objects can inherit directly from other objects through prototypes.
- This allows for reusability of code and shared behavior among objects.

---

## **Examples**

### **1. Using Prototypes with Constructor Functions**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const john = new Person("John", 30);
console.log(john.sayHello()); // Output: Hello, my name is John and I am 30 years old.
```

### **2. Prototype Chain Example**

```javascript
const obj = {
  a: 10,
};

const childObj = Object.create(obj); // childObj inherits from obj
childObj.b = 20;

console.log(childObj.a); // Output: 10 (inherited from obj)
console.log(childObj.b); // Output: 20 (own property)
```

### **3. Adding Methods Dynamically**

```javascript
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `The ${this.type} makes a sound.`;
};

const dog = new Animal("dog");
console.log(dog.speak()); // Output: The dog makes a sound.
```

---

## **Prototype Methods**

### **1. `Object.create(proto)`**

- Creates a new object with the specified prototype object.
- **Example**:

  ```javascript
  const proto = { greet: () => "Hello!" };
  const obj = Object.create(proto);

  console.log(obj.greet()); // Output: Hello!
  ```

### **2. `Object.getPrototypeOf(obj)`**

- Retrieves the prototype of an object.
- **Example**:
  ```javascript
  const obj = {};
  console.log(Object.getPrototypeOf(obj)); // Output: {}
  ```

### **3. `Object.setPrototypeOf(obj, proto)`**

- Sets the prototype of an object.
- **Example**:

  ```javascript
  const obj = {};
  const proto = { greet: () => "Hi!" };

  Object.setPrototypeOf(obj, proto);
  console.log(obj.greet()); // Output: Hi!
  ```

---

## **Advantages of Prototypes**

1. **Memory Efficiency**: Shared methods are stored once in the prototype rather than each object.
2. **Reusability**: Common behavior can be defined in prototypes and reused across objects.

---

## **Limitations**

1. **Debugging Complexity**: Prototype chains can make debugging more challenging.
2. **Performance**: Accessing properties higher up the chain is slower than accessing properties directly on the object.

---
