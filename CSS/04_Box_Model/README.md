# CSS Box Model & Block vs Inline Elements

## CSS Box Model

The **CSS Box Model** is a fundamental concept in web development that defines the structure and layout of an element on the page. Every element is considered as a box consisting of the following parts:

1. **Content**: The actual content of the box (such as text or images).
2. **Padding**: Clears an area around the content (inside the border), providing space between the content and the border.
3. **Border**: A border that surrounds the padding and content.
4. **Margin**: Clears an area outside the border, creating space between elements.

### Box-sizing Property

The `box-sizing` property determines how the width and height of an element are calculated:

- **content-box (Default)**: The width and height apply to the content only. Padding and borders are added outside the defined width and height, making the total size of the element larger.

  Example:

  ```css
  .content-box {
    box-sizing: content-box;
    background-color: #ffcccc;
  }
  ```

- **border-box:** The width and height include the content, padding, and border. This ensures that the element's total size remains within the specified width and height.

Example:

```css
.border-box {
  box-sizing: border-box;
  background-color: #ccffcc;
}
```

## Block vs Inline Elements

- **Block Elements:** These elements take up the full width of their container, meaning they stack vertically. They create a new line before and after them. Examples of block elements include `<div>, <p>, and <h1>`.

Example:

```css
<div class="block-example">
  This is a block-level element.
</div>
```

- **Inline Elements:** These elements only take up as much width as necessary, and they do not create a new line before or after them. Inline elements can appear next to other inline elements. Examples include `<span>, <a>, and <strong>.`

Example:

```css
<span class="inline-example">inline element</span>
```
