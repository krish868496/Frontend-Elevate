

# 🔥 Ultimate Flexbox Cheatsheet with Examples

Flexbox is one of the most powerful layout modules in CSS. It allows you to design complex layouts with ease.

---

## 📦 Flex Container

To start using Flexbox, apply `display: flex` or `display: inline-flex` to a container.

```css
.container {
  display: flex;
}
```

---

## 🔁 Flex Direction

Controls the direction of items.

```css
flex-direction: row | row-reverse | column | column-reverse;
```

| Property         | Description              |
|------------------|--------------------------|
| `row`            | Left to right (default)  |
| `row-reverse`    | Right to left            |
| `column`         | Top to bottom            |
| `column-reverse` | Bottom to top            |

---

## 📍 Justify Content (Main Axis)

Aligns items along the **main axis**.

```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

| Value            | Description              |
|------------------|--------------------------|
| `flex-start`     | Align to start           |
| `flex-end`       | Align to end             |
| `center`         | Center items             |
| `space-between`  | Equal space between      |
| `space-around`   | Equal space around       |
| `space-evenly`   | Equal space everywhere   |

---

## 📍 Align Items (Cross Axis)

Aligns items along the **cross axis**.

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

---

## 📐 Align Self

Overrides `align-items` for individual items.

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

---

## 🔄 Flex Wrap

Wrap items into multiple rows or columns.

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

---

## 📏 Flex Grow, Shrink, Basis

Used to control how items grow or shrink.

```css
.flex-item {
  flex-grow: 1;       /* Grow to fill space */
  flex-shrink: 1;     /* Shrink when needed */
  flex-basis: 200px;  /* Initial size */
  flex: 1 1 200px;    /* Shorthand: grow shrink basis */
}
```

---

## 🔢 Order

Changes visual order of items.

```css
.flex-item {
  order: 2; /* Default is 0 */
}
```

---

## 🧲 Align Content (for multi-line containers)

Works only when `flex-wrap` is enabled.

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

---

## ✨ Gap Support

Use `gap` to control spacing between items.

```css
.container {
  display: flex;
  gap: 20px;
}
```

---

## 🧪 Real World Examples

### ✅ Center an Item Horizontally and Vertically

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

### 🔁 Row Layout with Equal Spacing

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

---

### 🔃 Column Layout with Wrapping

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
```

---

### 🔀 Reverse Order

```css
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

---

### 📐 Individual Item Stretch

```css
.item {
  align-self: stretch;
}
```

---

## 🧠 Shorthand Property: `flex`

```css
.item {
  flex: 1 0 auto;
}
/* flex-grow: 1, flex-shrink: 0, flex-basis: auto */
```

---

## 📚 Helpful Resources

- 🧠 [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 🧪 [Flexbox Froggy Game](https://flexboxfroggy.com/)
- 📝 [MDN Flexbox Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)

---

## 💬 Final Thoughts

Flexbox is an essential skill for every frontend developer. Whether you're building navbars, layouts, or aligning buttons, Flexbox has you covered.

> Bookmark this cheatsheet and level up your layout game! 🚀
