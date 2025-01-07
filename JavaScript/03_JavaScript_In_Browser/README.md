# JavaScript DOM (Document Object Model) and BOM (Browser Object Model)

## **Introduction**

The **Document Object Model (DOM)** and the **Browser Object Model (BOM)** are essential concepts in web development that allow interaction with web pages and the browser.

---

## **1. Document Object Model (DOM)**

### **What is the DOM?**

The DOM is a programming interface for HTML and XML documents. It represents the document as a tree structure where each node is an object representing a part of the document (elements, attributes, text, etc.).

### **DOM Tree Structure**

- **Document**: The root of the tree.
- **Element Nodes**: Represent HTML tags.
- **Text Nodes**: Contain text.
- **Attribute Nodes**: Represent attributes of elements.

### **Key DOM Methods**

- **Selecting Elements**

  - `document.getElementById(id)`
  - `document.querySelector(selector)`
  - `document.querySelectorAll(selector)`

- **Manipulating Elements**

  - `element.innerHTML`: Get or set HTML content.
  - `element.style.property`: Change CSS styles.
  - `element.setAttribute(attr, value)`: Set an attribute.
  - `element.classList`: Add, remove, or toggle classes.

- **Event Handling**
  - `element.addEventListener(event, function)`: Attach an event handler.

### **Example: Manipulating DOM**

```javascript
// Select an element by ID
const heading = document.getElementById("heading");

// Change the text content
heading.innerHTML = "Hello, DOM!";

// Add a CSS class
heading.classList.add("highlight");
```

---

## **2. Browser Object Model (BOM)**

### **What is the BOM?**

The BOM provides interaction with the browser itself, beyond the document content. It includes objects like `window`, `navigator`, `screen`, `history`, `location`, and `document`.

### **Key BOM Objects**

- **`window`**

  - Represents the browser window.
  - Methods: `alert()`, `confirm()`, `prompt()`, `setTimeout()`, `setInterval()`.

- **`navigator`**

  - Provides information about the browser and user agent.
  - Properties: `navigator.userAgent`, `navigator.language`.

- **`screen`**

  - Provides information about the user's screen.
  - Properties: `screen.width`, `screen.height`.

- **`location`**

  - Provides information about the current URL.
  - Properties: `location.href`, `location.hostname`.
  - Methods: `location.reload()`, `location.assign(url)`.

- **`history`**
  - Provides access to the browser's session history.
  - Methods: `history.back()`, `history.forward()`.

### **Example: BOM Methods**

```javascript
// Display an alert box
window.alert("Hello, BOM!");

// Get user's browser information
console.log(navigator.userAgent);

// Redirect to another URL
location.assign("https://www.example.com");
```

---

## **Summary**

- **DOM** is used to interact with and manipulate the HTML structure of a webpage.
- **BOM** allows interaction with the browser environment.
