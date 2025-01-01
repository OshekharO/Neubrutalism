# Neubrutalism CSS Components Guide

This guide provides detailed information about all available components and their usage in Neubrutalism CSS.

## Table of Contents

- [Typography](#typography)
- [Buttons](#buttons)
- [Forms](#forms)
- [Cards](#cards)
- [Navigation](#navigation)
- [Grid System](#grid-system)
- [Utilities](#utilities)

## Typography

### Headings

```html
<h1 class="neu-heading">Heading 1</h1>
<h2 class="neu-heading">Heading 2</h2>
<h3 class="neu-heading">Heading 3</h3>
```

Typography classes follow a consistent vertical rhythm and maintain readability across different screen sizes.

### Body Text

```html
<p class="neu-text">Regular paragraph text</p>
<p class="neu-text-large">Larger paragraph text</p>
<p class="neu-text-small">Smaller paragraph text</p>
```

## Buttons

### Basic Buttons

```html
<button class="neu-button">Default Button</button>
<button class="neu-button neu-button--primary">Primary Button</button>
<button class="neu-button neu-button--secondary">Secondary Button</button>
```

### Button Sizes

```html
<button class="neu-button neu-button--small">Small Button</button>
<button class="neu-button">Default Size</button>
<button class="neu-button neu-button--large">Large Button</button>
```

### Button States

```html
<button class="neu-button" disabled>Disabled Button</button>
<button class="neu-button neu-button--loading">Loading Button</button>
```

## Forms

### Text Inputs

```html
<input type="text" class="neu-input" placeholder="Default input">
<input type="text" class="neu-input neu-input--large" placeholder="Large input">
<input type="text" class="neu-input" disabled placeholder="Disabled input">
```

### Select Dropdowns

```html
<select class="neu-select">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkboxes and Radio Buttons

```html
<label class="neu-checkbox">
  <input type="checkbox">
  <span>Checkbox Label</span>
</label>

<label class="neu-radio">
  <input type="radio" name="radio-group">
  <span>Radio Button Label</span>
</label>
```

## Cards

### Basic Card

```html
<div class="neu-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Interactive Card

```html
<div class="neu-card neu-card--interactive">
  <h3>Interactive Card</h3>
  <p>This card has hover and active states.</p>
</div>
```

### Card with Header

```html
<div class="neu-card">
  <div class="neu-card__header">
    <h3>Card Title</h3>
    <button class="neu-button neu-button--small">Action</button>
  </div>
  <div class="neu-card__content">
    Content goes here
  </div>
</div>
```

## Navigation

### Basic Navigation

```html
<nav class="neu-nav">
  <ul>
    <li><a href="#" class="neu-nav-link">Home</a></li>
    <li><a href="#" class="neu-nav-link">About</a></li>
    <li><a href="#" class="neu-nav-link">Contact</a></li>
  </ul>
</nav>
```

### Responsive Navigation

```html
<nav class="neu-nav neu-nav--responsive">
  <button class="neu-nav__toggle">Menu</button>
  <ul class="neu-nav__menu">
    <li><a href="#" class="neu-nav-link">Home</a></li>
    <li><a href="#" class="neu-nav-link">About</a></li>
    <li><a href="#" class="neu-nav-link">Contact</a></li>
  </ul>
</nav>
```

## Grid System

### Basic Grid

```html
<div class="neu-grid">
  <div class="neu-grid__item">Item 1</div>
  <div class="neu-grid__item">Item 2</div>
  <div class="neu-grid__item">Item 3</div>
</div>
```

### Grid Columns

```html
<div class="neu-grid neu-grid--cols-2">
  <!-- Two columns -->
</div>

<div class="neu-grid neu-grid--cols-3">
  <!-- Three columns -->
</div>

<div class="neu-grid neu-grid--cols-4">
  <!-- Four columns -->
</div>
```

## Utilities

### Spacing

```html
<div class="neu-m-1">Margin 1 unit</div>
<div class="neu-p-2">Padding 2 units</div>
<div class="neu-mx-auto">Horizontal auto margins</div>
```

### Display

```html
<div class="neu-hidden">Hidden element</div>
<div class="neu-block">Block element</div>
<div class="neu-flex">Flex container</div>
```

### Text Alignment

```html
<p class="neu-text-left">Left aligned</p>
<p class="neu-text-center">Center aligned</p>
<p class="neu-text-right">Right aligned</p>
```

## Best Practices

1. Always use semantic HTML elements
2. Maintain consistent spacing using utility classes
3. Use appropriate ARIA labels for accessibility
4. Test components across different viewport sizes
5. Follow the BEM naming convention for custom components

## Customization

You can customize component appearances using CSS variables:

```css
:root {
  /* Colors */
  --neu-primary: #000000;
  --neu-secondary: #ffffff;
  --neu-accent: #ff0000;
  
  /* Spacing */
  --neu-spacing-unit: 8px;
  
  /* Typography */
  --neu-font-family: 'Arial', sans-serif;
  --neu-font-size-base: 16px;
  
  /* Effects */
  --neu-shadow-offset: 4px;
  --neu-border-radius: 0px;
  --neu-border-width: 2px;
}
```
