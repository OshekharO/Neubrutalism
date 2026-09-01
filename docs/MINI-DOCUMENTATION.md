# Neubrutalism CSS Documentation

A minimal CSS framework inspired by Milligram, Pico.css, Skeleton, Chota, and Water.css.

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neubrutalism CSS</title>
  <link rel="stylesheet" href="neubrutalism.min.css">
</head>
<body>
  <div class="nb-container">
    <h1>Hello, World!</h1>
    <p>This is a minimal CSS framework.</p>
    <button class="nb-btn">Click Me</button>
  </div>
</body>
</html>
```

## Features

- **Lightweight**: ~8KB minified, ~27KB unminified
- **No dependencies**: Pure CSS, no JavaScript required
- **Responsive**: Mobile-first design with flexible grid
- **Dark mode**: Automatic (system preference) or manual toggle
- **Customizable**: CSS custom properties for easy theming
- **Accessible**: Focus-visible states, reduced motion support
- **Semantic**: Works with plain HTML elements

---

## Table of Contents

1. [Installation](#installation)
2. [Dark Mode](#dark-mode)
3. [Customization](#customization)
4. [Typography](#typography)
5. [Layout](#layout)
6. [Grid System](#grid-system)
7. [Buttons](#buttons)
8. [Forms](#forms)
9. [Tables](#tables)
10. [Navigation](#navigation)
11. [Cards](#cards)
12. [Badges](#badges)
13. [Alerts](#alerts)
14. [Lists](#lists)
15. [Accordion](#accordion)
16. [Progress](#progress)
17. [Spinners](#spinners)
18. [Tooltips](#tooltips)
19. [Modals](#modals)
20. [Utilities](#utilities)

---

## Installation

### CDN
```html
<link rel="stylesheet" href="https://cdn.example.com/neubrutalism.min.css">
```

### Local
```html
<link rel="stylesheet" href="path/to/neubrutalism.min.css">
```

### npm (hypothetical)
```bash
npm install neubrutalism-css
```

---

## Dark Mode

### Automatic (System Preference)
Add the `nb-auto-dark` class to your `<html>` tag:
```html
<html class="nb-auto-dark">
```

### Manual Toggle
Add the `nb-dark` class or `data-theme="dark"` attribute:
```html
<html class="nb-dark">
<!-- or -->
<html data-theme="dark">
```

### JavaScript Toggle
```javascript
// Enable dark mode
document.documentElement.classList.add('nb-dark');

// Disable dark mode
document.documentElement.classList.remove('nb-dark');

// Toggle
document.documentElement.classList.toggle('nb-dark');
```

---

## Customization

Override CSS custom properties to customize the theme:

```css
:root {
  --nb-color-primary: #6200ea;
  --nb-color-primary-hover: #3700b3;
  --nb-border-radius: 0.5rem;
  --nb-font-family: 'Inter', sans-serif;
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--nb-color-primary` | `#1a73e8` | Primary color |
| `--nb-color-primary-hover` | `#1557b0` | Primary hover state |
| `--nb-color-success` | `#0d904f` | Success color |
| `--nb-color-danger` | `#d93025` | Danger color |
| `--nb-color-warning` | `#e37400` | Warning color |
| `--nb-color-bg` | `#ffffff` | Background color |
| `--nb-color-text` | `#202124` | Text color |
| `--nb-color-border` | `#dadce0` | Border color |
| `--nb-border-radius` | `0.375rem` | Border radius |
| `--nb-font-size` | `16px` | Base font size |
| `--nb-line-height` | `1.6` | Line height |

---

## Typography

### Headings
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Paragraphs
```html
<p>This is a paragraph with <a href="#">a link</a>.</p>
<p class="text-muted">This is muted text.</p>
<p class="text-small">This is small text.</p>
```

### Text Utilities
```html
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-warning">Warning text</p>
<p class="text-center">Centered text</p>
<p class="text-right">Right-aligned text</p>
<p class="text-bold">Bold text</p>
<p class="text-uppercase">Uppercase text</p>
```

### Blockquotes
```html
<blockquote>
  <p>This is a blockquote.</p>
  <footer>— Author Name</footer>
</blockquote>
```

### Code
```html
<p>Use the <code>console.log()</code> function.</p>

<pre><code>function hello() {
  console.log("Hello, World!");
}</code></pre>

<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

---

## Layout

### Container
```html
<div class="nb-container">
  <!-- Your content -->
</div>

<div class="nb-container-fluid">
  <!-- Full-width content -->
</div>
```

---

## Grid System

### Basic Grid
```html
<div class="nb-row">
  <div class="nb-col">Column</div>
  <div class="nb-col">Column</div>
  <div class="nb-col">Column</div>
</div>
```

### Column Sizes
```html
<div class="nb-row">
  <div class="nb-col-6">Half width</div>
  <div class="nb-col-6">Half width</div>
</div>

<div class="nb-row">
  <div class="nb-col-4">One third</div>
  <div class="nb-col-8">Two thirds</div>
</div>
```

### Responsive
Columns stack automatically on mobile (< 577px).

### Flex Utilities
```html
<div class="nb-flex nb-justify-between nb-align-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

## Buttons

### Basic Buttons
```html
<button>Primary Button</button>
<button class="nb-btn">Primary Button</button>
<button class="nb-btn nb-btn-outline">Outline Button</button>
<button class="nb-btn nb-btn-secondary">Secondary</button>
```

### Button Colors
```html
<button class="nb-btn nb-btn-success">Success</button>
<button class="nb-btn nb-btn-danger">Danger</button>
<button class="nb-btn nb-btn-link">Link Button</button>
```

### Button Sizes
```html
<button class="nb-btn nb-btn-sm">Small</button>
<button class="nb-btn">Default</button>
<button class="nb-btn nb-btn-lg">Large</button>
<button class="nb-btn nb-btn-block">Block Button</button>
```

### Disabled Buttons
```html
<button disabled>Disabled</button>
<button class="nb-btn" disabled>Disabled</button>
```

### Button Group
```html
<div class="nb-btn-group">
  <button class="nb-btn">Left</button>
  <button class="nb-btn">Middle</button>
  <button class="nb-btn">Right</button>
</div>
```

---

## Forms

### Basic Form
```html
<form>
  <div class="nb-form-group">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Enter your name">
  </div>
  
  <div class="nb-form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email">
  </div>
  
  <div class="nb-form-group">
    <label for="message">Message</label>
    <textarea id="message" placeholder="Enter your message"></textarea>
  </div>
  
  <button type="submit" class="nb-btn">Submit</button>
</form>
```

### Select
```html
<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

### Checkboxes and Radios
```html
<div class="nb-check-wrapper">
  <input type="checkbox" id="check1">
  <label for="check1">Checkbox option</label>
</div>

<div class="nb-radio-wrapper">
  <input type="radio" name="radio" id="radio1">
  <label for="radio1">Radio option</label>
</div>
```

### Range Slider
```html
<input type="range" min="0" max="100" value="50">
```

### Input Group
```html
<div class="nb-input-group">
  <span class="nb-input-addon">@</span>
  <input type="text" placeholder="Username">
</div>
```

### Form Hints and Errors
```html
<div class="nb-form-group">
  <label for="password">Password</label>
  <input type="password" id="password">
  <p class="nb-form-hint">Must be at least 8 characters.</p>
</div>

<div class="nb-form-group">
  <label for="email">Email</label>
  <input type="email" id="email" value="invalid">
  <p class="nb-form-error">Please enter a valid email.</p>
</div>
```

---

## Tables

### Basic Table
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>
```

### Striped Table
```html
<table class="nb-table-striped">
  <!-- table content -->
</table>
```

### Bordered Table
```html
<table class="nb-table-bordered">
  <!-- table content -->
</table>
```

### Small Table
```html
<table class="nb-table-sm">
  <!-- table content -->
</table>
```

---

## Navigation

### Navbar
```html
<nav class="nb-navbar">
  <a href="#" class="nb-navbar-brand">Brand</a>
  <ul class="nb-navbar-nav">
    <li><a href="#" class="nb-nav-active">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### Breadcrumb
```html
<ol class="nb-breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Category</a></li>
  <li>Current Page</li>
</ol>
```

### Pagination
```html
<ul class="nb-pagination">
  <li class="nb-disabled"><span>&laquo;</span></li>
  <li class="nb-active"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>
```

---

## Cards

### Basic Card
```html
<div class="nb-card">
  <div class="nb-card-body">
    <h3 class="nb-card-title">Card Title</h3>
    <p class="nb-card-text">Card content goes here.</p>
    <button class="nb-btn">Action</button>
  </div>
</div>
```

### Card with Header and Footer
```html
<div class="nb-card">
  <div class="nb-card-header">Card Header</div>
  <div class="nb-card-body">
    <h3 class="nb-card-title">Card Title</h3>
    <p class="nb-card-text">Card content goes here.</p>
  </div>
  <div class="nb-card-footer">Card Footer</div>
</div>
```

### Card with Image
```html
<div class="nb-card">
  <img src="image.jpg" class="nb-card-img" alt="Card image">
  <div class="nb-card-body">
    <h3 class="nb-card-title">Card Title</h3>
    <p class="nb-card-text">Card content goes here.</p>
  </div>
</div>
```

---

## Badges

```html
<span class="nb-badge">Default</span>
<span class="nb-badge nb-badge-primary">Primary</span>
<span class="nb-badge nb-badge-success">Success</span>
<span class="nb-badge nb-badge-danger">Danger</span>
<span class="nb-badge nb-badge-warning">Warning</span>
<span class="nb-badge nb-badge-info">Info</span>
```

---

## Alerts

```html
<div class="nb-alert nb-alert-info">
  <p>This is an informational alert.</p>
</div>

<div class="nb-alert nb-alert-success">
  <p>This is a success alert.</p>
</div>

<div class="nb-alert nb-alert-warning">
  <p>This is a warning alert.</p>
</div>

<div class="nb-alert nb-alert-danger">
  <p>This is a danger alert.</p>
</div>
```

---

## Lists

### Unordered List
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered List
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Description List
```html
<dl>
  <dt>Term 1</dt>
  <dd>Description for term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for term 2</dd>
</dl>
```

### Inline Description List
```html
<dl class="nb-dl-inline">
  <dt>Name</dt>
  <dd>John Doe</dd>
  <dt>Email</dt>
  <dd>john@example.com</dd>
</dl>
```

---

## Accordion

```html
<details>
  <summary>Section 1</summary>
  <p>Content for section 1.</p>
</details>

<details>
  <summary>Section 2</summary>
  <p>Content for section 2.</p>
</details>
```

---

## Progress

```html
<div class="nb-progress">
  <div class="nb-progress-bar" style="width: 75%"></div>
</div>

<div class="nb-progress">
  <div class="nb-progress-bar nb-progress-bar-success" style="width: 100%"></div>
</div>

<div class="nb-progress">
  <div class="nb-progress-bar nb-progress-bar-danger" style="width: 25%"></div>
</div>
```

---

## Spinners

```html
<div class="nb-spinner"></div>
<div class="nb-spinner nb-spinner-sm"></div>
<div class="nb-spinner nb-spinner-lg"></div>
```

---

## Tooltips

```html
<p>Hover over <span data-tooltip="This is a tooltip">this text</span> to see a tooltip.</p>
```

---

## Modals

```html
<!-- Trigger -->
<a href="#myModal" class="nb-btn">Open Modal</a>

<!-- Modal -->
<div id="myModal" class="nb-modal">
  <div class="nb-modal-dialog">
    <div class="nb-modal-header">
      <h3 class="nb-modal-title">Modal Title</h3>
      <a href="#" class="nb-modal-close">&times;</a>
    </div>
    <div class="nb-modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="nb-modal-footer">
      <a href="#" class="nb-btn nb-btn-secondary">Close</a>
      <button class="nb-btn">Save Changes</button>
    </div>
  </div>
</div>
```

---

## Utilities

### Display
```html
<div class="nb-d-none">Hidden</div>
<div class="nb-d-block">Block</div>
<div class="nb-d-flex">Flex</div>
```

### Spacing
```html
<div class="nb-mt-2">Margin top</div>
<div class="nb-mb-3">Margin bottom</div>
<div class="nb-p-2">Padding</div>
<div class="nb-mx-auto">Horizontal center</div>
```

### Width
```html
<div class="nb-w-25">25% width</div>
<div class="nb-w-50">50% width</div>
<div class="nb-w-100">100% width</div>
```

### Borders
```html
<div class="nb-border">Border</div>
<div class="nb-rounded">Rounded</div>
<div class="nb-rounded-circle">Circle</div>
```

### Backgrounds
```html
<div class="nb-bg-primary">Primary background</div>
<div class="nb-bg-success">Success background</div>
<div class="nb-bg-danger">Danger background</div>
```

### Shadows
```html
<div class="nb-shadow-sm">Small shadow</div>
<div class="nb-shadow">Medium shadow</div>
<div class="nb-shadow-lg">Large shadow</div>
```

### Screen Reader Only
```html
<span class="nb-sr-only">This text is only visible to screen readers.</span>
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## License

MIT License - see LICENSE file for details.
