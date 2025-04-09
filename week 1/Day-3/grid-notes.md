

### 📘 `css-grid-cheatsheet.md`

```md
# 📦 CSS Grid Complete Cheatsheet (Beginner to Advanced)

A comprehensive guide to mastering CSS Grid Layout, with clear examples and comments.

---

## 🎯 What is CSS Grid?

CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items into rows and columns.

```css
display: grid;
```

---

## 🔹 1. Basic Grid Layout

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  gap: 10px;
}
```

```html
<div class="grid">
  <div>1</div><div>2</div><div>3</div>
</div>
```

---

## 🔹 2. Fixed + Flexible Columns

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 2fr; /* Mixed widths */
}
```

---

## 🔹 3. Auto-Fit + `minmax()`

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
```

This makes the grid **responsive** and adjusts number of columns based on container width.

---

## 🔹 4. Grid Template Areas

```css
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "nav aside"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}
```

### Assigning areas:
```css
.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }
```

---

## 🔹 5. Grid Row and Column Span

```css
.grid {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 100px);
}

.item1 { grid-column: 1 / 3; }  /* Spans 2 columns */
.item2 { grid-row: 1 / 3; }     /* Spans 2 rows */
```

---

## 🔹 6. Aligning the Grid Container

```css
.grid {
  justify-content: center; /* Aligns whole grid horizontally */
  align-content: center;   /* Aligns whole grid vertically */
}
```

### Values:
- `start`
- `center`
- `end`
- `space-between`
- `space-around`
- `space-evenly`

---

## 🔹 7. Aligning Grid Items

```css
.grid {
  justify-items: center; /* Items inside each cell: horizontal */
  align-items: center;   /* Items inside each cell: vertical */
}
```

---

## 🔹 8. Nested Grids

```html
<div class="grid-parent">
  <div class="grid-child">
    <div>Nested 1</div>
    <div>Nested 2</div>
  </div>
</div>
```

```css
.grid-parent {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-child {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

---

## 🔹 9. Grid Shorthand

```css
grid: auto / auto-flow dense;
```

---

## 🔹 10. Named Lines Example

```css
.grid {
  display: grid;
  grid-template-columns: [start] 1fr [middle] 2fr [end];
}
```

---

## 🧪 Extra: Using `fr`, `%`, `auto`

- `fr` = fractional unit
- `%` = relative to container
- `auto` = size based on content

---

## ✅ Summary

| Property | Use |
|----------|-----|
| `display: grid` | Enables grid |
| `grid-template-columns` | Defines columns |
| `grid-template-rows` | Defines rows |
| `grid-area` | Assigns named areas |
| `grid-column`, `grid-row` | Manual spans |
| `gap` | Adds spacing |
| `justify-content` / `align-content` | Align whole grid |
| `justify-items` / `align-items` | Align items inside cells |

---

## 🔗 Connect with Me

- 🧑‍💻 GitHub: [github.com/yourusername](https://github.com/yourusername)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- ✍️ Hasnode Blog: [yourblog.hasnode.dev](https://yourblog.hasnode.dev)

```
