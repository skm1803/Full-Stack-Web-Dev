### Module Systems in JavaScript: **ES Modules (ESM)** vs **CommonJS (CJS)**

JavaScript has two popular module systems: **ES Modules (ESM)** and **CommonJS (CJS)**. Both are used to structure code into reusable, maintainable parts, but they differ in syntax and usage.

---

### **ES Modules (ESM)**

**ES Modules (ESM)** is the official standardized module system in JavaScript, introduced in ES6 (ECMAScript 2015). It uses `import` and `export` keywords.

#### **Features of ES Modules**

1. **Static Imports**: Imports are statically analyzed, meaning they are determined at compile time.
2. **File Extensions**: Typically, files use `.js` or `.mjs` extensions.
3. **Browser Support**: ESM is natively supported in modern browsers and can be used in both client-side and server-side JavaScript.
4. **Default and Named Exports**: Supports both default and named exports.

#### **Syntax**

```javascript
// Exporting (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) {
  return a * b;
}

// Importing (main.js)
import multiply, { add, subtract } from "./math.js";

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 2)); // 8
```

---

### **CommonJS (CJS)**

**CommonJS (CJS)** is a module system primarily used in Node.js. It uses `require` and `module.exports` or `exports` for importing and exporting modules.

#### **Features of CommonJS**

1. **Dynamic Imports**: Modules are loaded at runtime.
2. **File Extensions**: Files generally use `.js` extension.
3. **Node.js Default**: CommonJS is the default module system in Node.js before the adoption of ESM.
4. **Synchronous Loading**: Modules are loaded synchronously, which is suitable for server-side JavaScript.

#### **Syntax**

```javascript
// Exporting (math.js)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

module.exports = { add, subtract, multiply };

// Importing (main.js)
const { add, subtract, multiply } = require("./math");

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 2)); // 8
```

---

### **Key Differences**

| Feature              | ES Modules (ESM)           | CommonJS (CJS)               |
| -------------------- | -------------------------- | ---------------------------- |
| Syntax               | `import`/`export`          | `require`/`module.exports`   |
| Import/Export Time   | Static (compile-time)      | Dynamic (run-time)           |
| Usage                | Browser & Node.js (modern) | Node.js (traditional)        |
| Asynchronous Support | Supports top-level `await` | No top-level `await` support |
| File Extension       | `.js`, `.mjs`              | `.js`                        |
| Scope                | Module scope               | File scope                   |

---

### **Choosing Between ESM and CommonJS**

- Use **ES Modules** for modern JavaScript projects, especially if you need browser compatibility or want to leverage modern features like top-level `await`.
- Use **CommonJS** if you are working in a Node.js environment and need compatibility with existing CommonJS modules.
