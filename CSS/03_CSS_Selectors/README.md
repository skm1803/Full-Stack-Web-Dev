# CSS Selectors Example

This document demonstrates different CSS selectors applied to various HTML elements. The following selectors are used to style the page:

---

## 1. Universal Selector (`*`)

The universal selector (`*`) applies the style to **all** elements on the page.

### Code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- **Description**: Removes all default margin and padding from elements and ensures consistent box-sizing across all elements.

---

## 2. Type Selector (`p`)

The type selector targets all elements of a specific type or tag, such as `p`, `h1`, etc.

### Code

```css
p {
  font-size: 16px;
  margin-bottom: 10px;
}
```

- **Description**: This applies the `font-size` and `margin-bottom` to all `<p>` elements on the page.

---

## 3. Class Selector (`.highlight`)

The class selector applies styles to elements with a specific `class` attribute.

### Code

```css
.highlight {
  background-color: #21a2c9;
}
```

- **Description**: Applies a background color to any element with the class `.highlight`.

---

## 4. ID Selector (`#header`)

The ID selector is used to apply styles to an element with a specific `id` attribute.

### Code

```css
#header {
  background-color: #860303;
}
```

- **Description**: This targets the element with the `id="header"` and applies a background color.

---

## 5. Attribute Selector (`input[type="text"]`)

Attribute selectors allow you to apply styles to elements based on their attributes.

### Code

```css
input[type="text"] {
  border: 2px solid #21a2c9;
}
```

- **Description**: This selector targets `<input>` elements with the type `text` and applies a border style.

---

## 6. Descendant Selector (`article p`)

The descendant selector targets elements that are nested within a specific parent element.

### Code

```css
article p {
  font-style: italic;
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px;
}
```

- **Description**: Applies styles to `<p>` elements that are inside an `<article>` element. The style includes italic text, background color, and padding.

---

## 7. Child Selector (`div > p`)

The child selector targets only the direct child elements of a specific parent element.

### Code

```css
div > p {
  background-color: #880404;
}
```

- **Description**: Applies the background color to `<p>` elements that are direct children of a `<div>`.

---

## 8. Adjacent Sibling Selector (`h1 + p`)

The adjacent sibling selector targets the first sibling immediately following a specific element.

### Code

```css
h1 + p {
  font-weight: bold;
}
```

- **Description**: This applies a bold font weight to the first `<p>` element immediately following an `<h1>` element.

---

## 9. General Sibling Selector (`h2 ~ p`)

The general sibling selector targets all sibling elements that follow a specific element.

### Code

```css
h2 ~ p {
  color: #860303;
}
```

- **Description**: Applies a red color to all `<p>` elements that are siblings of an `<h2>`.

---

## 10. Pseudo-class Selector (`a:hover`)

Pseudo-class selectors style elements in specific states, such as when they are hovered over.

### Code

```css
a:hover {
  background-color: #14a50e;
  text-decoration: none;
  color: #1a1a1a;
  padding: 5px;
  margin: 4px;
}
```

- **Description**: Changes the background color, removes underline, and modifies padding and margin when an `<a>` element is hovered over.

---

## 11. Pseudo-element Selector (`p::first-letter`)

Pseudo-element selectors style specific parts of an element, like the first letter or first line.

### Code

```css
p::first-letter {
  font-weight: bold;
  font-size: 30px;
}
```

- **Description**: Makes the first letter of every `<p>` element bold and larger in size.

---

## 12. Grouping Selector

Grouping selectors allow you to apply the same styles to multiple elements at once.

### Code

```css
h1,
h2,
h3 {
  color: orange;
}
```

- **Description**: Applies the color orange to all `<h1>`, `<h2>`, and `<h3>` elements on the page.

---

## Conclusion

This example demonstrates various CSS selectors, each with specific use cases for targeting elements on the page. Using the correct selector helps keep styles clean, modular, and reusable.

- **Universal Selector**: Applies to all elements.
- **Type Selector**: Targets specific element types.
- **Class Selector**: Targets elements with a specific class.
- **ID Selector**: Targets a single element by ID.
- **Attribute Selector**: Targets elements with specific attributes.
- **Descendant & Child Selectors**: Target elements based on their nesting structure.
- **Sibling Selectors**: Target elements based on their position relative to others.
- **Pseudo-class & Pseudo-element Selectors**: Style elements in specific states or parts.
- **Grouping Selector**: Apply the same style to multiple elements at once.
