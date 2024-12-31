# JavaScript: Operators

## 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Description         | Example          | Result |
| -------- | ------------------- | ---------------- | ------ |
| `+`      | Addition            | `5 + 3`          | `8`    |
| `-`      | Subtraction         | `5 - 3`          | `2`    |
| `*`      | Multiplication      | `5 * 3`          | `15`   |
| `/`      | Division            | `5 / 2`          | `2.5`  |
| `%`      | Modulus (Remainder) | `5 % 2`          | `1`    |
| `++`     | Increment           | `let x = 5; x++` | `6`    |
| `--`     | Decrement           | `let x = 5; x--` | `4`    |

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Description         | Example  | Equivalent to |
| -------- | ------------------- | -------- | ------------- |
| `=`      | Assign              | `x = 5`  | -             |
| `+=`     | Add and assign      | `x += 3` | `x = x + 3`   |
| `-=`     | Subtract and assign | `x -= 3` | `x = x - 3`   |
| `*=`     | Multiply and assign | `x *= 3` | `x = x * 3`   |
| `/=`     | Divide and assign   | `x /= 3` | `x = x / 3`   |
| `%=`     | Modulus and assign  | `x %= 3` | `x = x % 3`   |

---

## 3. Comparison Operators

Used to compare two values.

| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal to                 | `5 == '5'`  | `true`  |
| `===`    | Strict equal to          | `5 === '5'` | `false` |
| `!=`     | Not equal to             | `5 != '5'`  | `false` |
| `!==`    | Strict not equal to      | `5 !== '5'` | `true`  |
| `>`      | Greater than             | `5 > 3`     | `true`  |
| `<`      | Less than                | `5 < 3`     | `false` |
| `>=`     | Greater than or equal to | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal to    | `5 <= 5`    | `true`  |

---

## 4. Logical Operators

Used to perform logical operations.

| Operator | Description | Example         | Result  |
| -------- | ----------- | --------------- | ------- |
| `&&`     | Logical AND | `true && false` | `false` |
| `OR`     | Logical OR  | `true OR false` | `true`  |
| `!`      | Logical NOT | `!true`         | `false` |

---

## 5. Bitwise Operators

Work on binary numbers.

| Operator | Description | Example  | Result (Binary)   |
| -------- | ----------- | -------- | ----------------- |
| `&`      | AND         | `5 & 1`  | `1` (0101 & 0001) |
|          | `OR`        | `5 OR 1` | `5` (0101 0001)   |
| `^`      | XOR         | `5 ^ 1`  | `4` (0101 ^ 0001) |
| `~`      | NOT         | `~5`     | `-6`              |
| `<<`     | Left shift  | `5 << 1` | `10`              |
| `>>`     | Right shift | `5 >> 1` | `2`               |

---

## 6. Ternary Operator

A shorthand for conditional statements.

**Syntax**: `condition ? value_if_true : value_if_false`

**Example**:

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // Result: "Yes"
```

---

## 7. Type Operators

Used for type-related operations.

| Operator     | Description                                   | Example                | Result     |
| ------------ | --------------------------------------------- | ---------------------- | ---------- |
| `typeof`     | Returns the type                              | `typeof 42`            | `"number"` |
| `instanceof` | Checks if an object is an instance of a class | `arr instanceof Array` | `true`     |

---

## 8. Other Operators

- **Comma Operator `,`**: Evaluates multiple expressions and returns the last one.
  ```javascript
  let x = (1, 2, 3); // Result: 3
  ```
- **Spread Operator `...`**: Expands arrays or objects.
  ```javascript
  let arr = [1, 2, 3];
  let newArr = [...arr, 4, 5]; // Result: [1, 2, 3, 4, 5]
  ```
