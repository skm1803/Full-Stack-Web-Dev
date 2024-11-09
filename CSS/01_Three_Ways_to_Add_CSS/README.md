# Learning CSS: Three Ways to Add CSS

In web development, there are three primary ways to style HTML elements using CSS: **Inline Styles**, **Internal Styles**, and **External Styles**. Each method serves a different purpose and is useful in various scenarios.

---

## 1. Inline Styles

**Inline styles** are applied directly to individual HTML elements using the `style` attribute. This method is useful for applying quick styles to single elements, though it’s generally less efficient for larger projects as it doesn’t allow for reusable CSS.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inline Styles</title>
  </head>
  <body>
    <h1 style="color: blue; font-size: 24px;">
      This is styled with inline CSS
    </h1>
    <p style="color: gray; font-size: 18px;">
      Inline styles apply directly to the element.
    </p>
  </body>
</html>
```

## 2. Internal Styles

**Internal styles** are defined within the style tags inside the head section of an HTML document. This method is useful for applying styles to a single page without needing an external CSS file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Styles</title>
  <style>
    h1 {
      color: green;
      font-size: 24px;
    }
    p {
      color: darkgray;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>This is styled with internal CSS</h1>
  <p>Internal styles are applied within the `<style>` tags in the document’s head.</p>
</body>
</html>
```

## 3. External Styles

**External styles** are stored in a separate .css file that is linked to the HTML document. This approach is ideal for larger projects, as it allows you to keep your styles organized and apply them across multiple pages.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External Styles</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>This is styled with external CSS</h1>
    <p>External styles are linked to the HTML document.</p>
  </body>
</html>
```

```css
CSS File (styles.css) h1 {
  color: purple;
  font-size: 24px;
}
p {
  color: darkslategray;
  font-size: 18px;
}
```

## Summary

- Inline Styles: Styles applied directly to HTML elements using the style attribute.

- Internal Styles: Styles defined in the style tag within the HTML document’s head section.

- External Styles: Styles written in a separate .css file and linked to the HTML document.
