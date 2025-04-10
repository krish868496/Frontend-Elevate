
---


```md
# 🎨 CSS Transitions & Animations - Full Notes

This document covers all essential CSS **Transitions** and **Animations** with examples.

---

## ✅ What is a CSS Transition?

A CSS transition allows you to change property values **smoothly** (over a given duration), instead of instantly.

### 🔧 Basic Syntax:

```css
transition: property duration timing-function delay;
```

- `property` – the CSS property to transition
- `duration` – how long the transition takes
- `timing-function` – easing function (`ease`, `linear`, etc.)
- `delay` – optional delay before the transition starts

---

## 🧪 Example: Basic Transition

```html
<div class="box"></div>

<style>
.box {
  width: 100px;
  height: 100px;
  background: coral;
  transition: all 0.3s ease-in-out;
}
.box:hover {
  background: teal;
  transform: scale(1.2) rotate(15deg);
}
</style>
```

---

## 🎛️ Timing Functions

| Function       | Description                        |
|----------------|------------------------------------|
| `linear`       | Constant speed                     |
| `ease`         | Slow start & end                   |
| `ease-in`      | Slow start                         |
| `ease-out`     | Slow end                           |
| `ease-in-out`  | Slow start and end                 |

```html
<div class="timing-box ease"></div>
<div class="timing-box linear"></div>
...

<style>
.timing-box {
  transition: all 1s;
}
.timing-box.ease       { transition-timing-function: ease; }
.timing-box.linear     { transition-timing-function: linear; }
.timing-box.ease-in    { transition-timing-function: ease-in; }
.timing-box.ease-out   { transition-timing-function: ease-out; }
.timing-box.ease-in-out{ transition-timing-function: ease-in-out; }
</style>
```

---

## 🎞️ CSS Animations

CSS animations allow elements to **gradually change** from one style to another.

### 🔧 Syntax:

```css
selector {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}
```

---

## 🧠 Key Properties

| Property           | Description                                       |
|--------------------|---------------------------------------------------|
| `animation-name`   | Name of `@keyframes` to run                       |
| `animation-duration` | Time the animation takes                        |
| `animation-delay`  | Wait time before animation starts                 |
| `animation-iteration-count` | Number of loops (`infinite` or number)   |
| `animation-direction` | `normal`, `reverse`, `alternate`, `alternate-reverse` |
| `animation-fill-mode` | `none`, `forwards`, `backwards`, `both`        |
| `animation-play-state` | `running`, `paused`                          |

---

## 🔁 Keyframe Example (Pulse)

```html
<div class="pulse"></div>

<style>
.pulse {
  animation: pulseAnim 1s ease-in-out infinite;
}
@keyframes pulseAnim {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}
</style>
```

---

## 🏀 Bounce Animation

```html
<div class="ball"></div>

<style>
.ball {
  width: 50px;
  height: 50px;
  background: tomato;
  border-radius: 50%;
  position: relative;
  animation: bounce 1s infinite alternate ease-in-out;
}
@keyframes bounce {
  0% { top: 0; }
  100% { top: 100px; }
}
</style>
```

---

## 🛑 Fill Mode Example

```html
<div class="fill-mode"></div>

<style>
.fill-mode {
  animation: colorChange 2s forwards;
}
@keyframes colorChange {
  0% { background: gray; }
  100% { background: green; }
}
</style>
```

---

## 🌀 Spin on Hover

```html
<div class="hover-animate"></div>

<style>
.hover-animate {
  width: 100px;
  height: 100px;
  background: orange;
}
.hover-animate:hover {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
```

---

## ⏸️ Pause on Hover

```html
<div class="pause-animation"></div>

<style>
.pause-animation {
  width: 80px;
  height: 80px;
  background: dodgerblue;
  animation: moveRight 3s linear infinite;
}
.pause-animation:hover {
  animation-play-state: paused;
}
@keyframes moveRight {
  0% { transform: translateX(0); }
  100% { transform: translateX(150px); }
}
</style>
```

---

## 📌 Summary

| Feature        | Use For                                  |
|----------------|-------------------------------------------|
| `transition`   | Smooth changes on user interaction        |
| `animation`    | Looping or timed animations               |
| `@keyframes`   | Define steps of animation                 |
| `hover` trigger| Start animation on mouse hover            |
| `fill-mode`    | Keep end state after animation finishes   |
| `play-state`   | Pause/resume animation                    |

---

## 💡 Pro Tips

- Combine multiple transitions/animations for richer effects.
- Use `transform` instead of `top/left` for smoother animations.
- Use `will-change: transform` for performance optimization.
- Use `animation-delay` to stagger animations on multiple elements.

---

## 📂 Resources

- [MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [CSS Tricks: Animations Guide](https://css-tricks.com/almanac/properties/a/animation/)

---

Happy Animating! 🎉
