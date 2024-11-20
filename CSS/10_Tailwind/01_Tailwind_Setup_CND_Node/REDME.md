# Tailwind CSS Guide

## What is Tailwind CSS?

**Tailwind CSS** is a utility-first CSS framework that allows you to create custom user interfaces directly in your HTML. Instead of writing traditional CSS rules, you apply pre-defined utility classes to your HTML elements.

### Features of Tailwind CSS

1. **Utility-First**: Write styles directly in your HTML using utility classes.
2. **Customization**: Easily customize the framework with your own design system.
3. **Responsive Design**: Provides utilities for responsive design using breakpoints.
4. **Rapid Prototyping**: Speeds up development by eliminating the need to switch between HTML and CSS files.

---

## Using Tailwind CSS via CDN (Quick Start)

This method is ideal for prototyping or small projects.

### Steps to Use Tailwind CDN

1. **Create an HTML File**:
   Create a basic HTML file (e.g., `index.html`).

2. **Include the Tailwind CSS CDN**:
   Add the following `<script>` tag in the `<head>` section of your HTML file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Tailwind CSS Example</title>
       <!-- Tailwind CSS via CDN -->
       <script src="https://cdn.tailwindcss.com"></script>
     </head>
     <body>
       <div class="bg-blue-500 text-white text-center p-4 rounded-lg">
         Hello, Tailwind CSS via CDN!
       </div>
     </body>
   </html>
   ```

3. **Write Tailwind Classes in HTML**:
   Add utility classes to your elements. For example:

   - `bg-blue-500`: Applies a blue background.
   - `text-white`: Sets the text color to white.
   - `p-4`: Adds padding.
   - `rounded-lg`: Makes the corners rounded.

4. **Customizing via CDN** _(optional)_:
   You can extend Tailwind's default configuration directly using the `tailwind.config()` method:

   ```html
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             customBlue: "#1c3d5a",
           },
         },
       },
     };
   </script>
   ```

---

## Setting Up Tailwind CSS Locally with Node.js

For larger projects, you can set up Tailwind CSS locally to enable customizations and optimize the CSS output.

### Step 1: Install Node.js

Ensure Node.js is installed on your system. Check by running:

```bash
node -v
npm -v
```

### Step 2: Initialize the Project

Create a folder for your project and initialize it:

```bash
mkdir tailwind-project
cd tailwind-project
npm init -y
```

### Step 3: Install Tailwind CSS

Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

This will create a `tailwind.config.js` file.

### Step 4: Configure Tailwind

Edit `tailwind.config.js` to specify your content files:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Add all HTML files in the root directory
  theme: {
    extend: {}, // Add custom styles here
  },
  plugins: [],
};
```

### Step 5: Create a CSS File

Create a `styles.css` file in your project folder with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6: Build the CSS

Run the Tailwind CLI command to generate the CSS:

```bash
npx tailwindcss -i ./styles.css -o ./dist/output.css --watch
```

- **Input File**: `./styles.css`
- **Output File**: `./dist/output.css`
- The `--watch` flag automatically updates the output file whenever you make changes.

### Step 7: Link the CSS in HTML

Include the compiled CSS in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind CSS Local Setup</title>
    <link href="./dist/output.css" rel="stylesheet" />
  </head>
  <body>
    <div class="bg-green-500 text-white p-4 rounded-lg">
      Hello, Tailwind CSS Local Setup!
    </div>
  </body>
</html>
```

### Step 8: Customize Tailwind CSS

- Add your customizations in `tailwind.config.js` under the `theme` key.
- Example: Adding a new color:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#0fa9e6",
      },
    },
  },
};
```

You can now use `bg-brand` to apply the custom color.

---

## Comparison: CDN vs Node.js Setup

| Feature           | CDN Setup                        | Node.js Local Setup                 |
| ----------------- | -------------------------------- | ----------------------------------- |
| **Ease of Use**   | Simple and quick                 | Requires installation               |
| **Customization** | Limited                          | Fully customizable                  |
| **Output Size**   | Larger (includes unused classes) | Optimized (removes unused classes)  |
| **Use Case**      | Prototyping or small projects    | Production-ready and large projects |
