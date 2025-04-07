# 📘 Semantic vs Non-Semantic HTML – Developer Notes

## 🔹 What is Semantic HTML?

Semantic HTML uses tags that clearly describe the **purpose and structure** of the content inside them.

### ✅ Examples:
- `<header>`
- `<main>`
- `<article>`
- `<section>`
- `<footer>`
- `<nav>`

---

## 🔹 What is Non-Semantic HTML?

Non-semantic tags do **not describe** their content or role. They're generic containers used for styling and layout.

### 🚫 Examples:
- `<div>`
- `<span>`

---

## 🧾 Comparison Table

| Feature            | Semantic HTML              | Non-Semantic HTML         |
|--------------------|----------------------------|----------------------------|
| **Meaning**        | Describes content purpose  | No inherent meaning        |
| **Accessibility**  | More accessible            | Requires ARIA for meaning  |
| **SEO Friendly**   | Yes                        | No                         |
| **Readability**    | Easier to read/maintain    | Harder to understand       |
| **Use Case**       | Layout/structure/content   | Styling, layout wrappers   |

---

## ✅ Pros of Semantic HTML

- ✔️ Improves **accessibility** (for screen readers, keyboard nav)
- ✔️ Better for **SEO**
- ✔️ Clear structure for **developers**
- ✔️ Reduces need for ARIA roles
- ✔️ Easier for teams to collaborate

---

## ❌ Cons of Semantic HTML

- ⏱️ Slight learning curve for beginners
- 🎨 Default styles may need overrides
- 📏 Not suitable for highly dynamic UI (use custom elements + ARIA)

---

## 🧠 When to Use What?

| Situation                           | Use                             |
|------------------------------------|----------------------------------|
| Page structure/layout              | Semantic tags (`<main>`, `<nav>`)|
| Pure styling or flexible layout    | Non-semantic (`<div>`, `<span>`) |
| Custom components or UI widgets    | Non-semantic + ARIA roles        |
| Accessibility and SEO important    | Prefer semantic HTML             |

---

## ✅ Code Example – Semantic vs Non-Semantic

### ✅ Semantic Version:
```html
<article>
  <h2>How to Use Semantic HTML</h2>
  <p>Semantic tags improve accessibility and SEO...</p>
</article>
