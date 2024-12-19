# JavaScript Compilation Phases

## **1. Parsing**

This is the first step where the engine reads your code and converts it into a data structure it can understand.

### **Lexical Analysis (Tokenization):**

- The source code is broken into small chunks called **tokens** (e.g., keywords, variables, operators).
- Example:
  ```javascript
  let x = 10;
  ```
  Tokens:
  - `let`, `x`, `=`, `10`, `;`

### **Syntax Analysis (Parsing):**

- The tokens are transformed into a **Parse Tree** or **Abstract Syntax Tree (AST)**.
- The AST represents the hierarchical structure of your code.

Example:

```javascript
let x = 10;
```

Would generate a tree like this:

```
VariableDeclaration
 ├─ Identifier: x
 └─ Literal: 10
```

---

## **2. Compilation**

Modern JavaScript engines like **V8** employ a process called **Just-In-Time (JIT) Compilation**.

### **Bytecode Generation:**

- The AST is converted into an intermediate representation called **Bytecode**.
- Bytecode is platform-independent and easier to execute than raw source code.

### **Optimization:**

- During compilation, the engine applies optimizations, like inlining functions or eliminating dead code.

### **Baseline Interpreter:**

- Initially, the bytecode is executed by a **baseline interpreter**, which is fast but doesn't optimize deeply.

---

## **3. Execution**

Once the code is compiled into bytecode, it’s ready for execution.

### **Interpreter (Baseline Execution):**

- The bytecode is executed line-by-line.

### **Profiler:**

- While executing, the engine identifies "hot code" (frequently used code) using a **profiler**.

### **Optimized Compilation:**

- Hot code is sent to an **optimized compiler** (e.g., V8’s **TurboFan**), which produces highly optimized machine code for faster execution.
- Example optimizations:
  - Replacing slow operations with faster equivalents.
  - Optimizing frequently accessed objects or arrays.

---

## **4. Garbage Collection**

As your code runs, memory management is handled automatically by the **Garbage Collector**.

### **Mark-and-Sweep Algorithm**:

- Unused objects in memory are marked and removed.
- This ensures efficient memory usage.

---

## **Summary of Compilation Phases**

1. **Parsing:** Converts source code into an AST.
2. **Bytecode Generation:** Creates intermediate bytecode from the AST.
3. **Baseline Execution:** Executes bytecode while profiling.
4. **Optimization:** Frequently used code is optimized into machine code.
