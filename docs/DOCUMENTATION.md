# Neubrutalism CSS Documentation

Comprehensive documentation for Neubrutalism CSS - a minimalist, high-contrast CSS library inspired by Brutalist design principles.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [CSS Custom Properties](#css-custom-properties)
- [Typography](#typography)
- [Layout & Grid](#layout--grid)
- [Components](#components)
- [Form Elements](#form-elements)
- [Utilities](#utilities)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Examples](#examples)

---

## Getting Started

Neubrutalism CSS is a lightweight, dependency-free CSS library that provides bold, high-contrast components perfect for modern web applications.

### Key Features

- 🎨 High-contrast black and white design
- ⚡ Lightweight (~70KB unminified)
- 🌙 Built-in dark mode support
- ♿ Accessibility-first approach
- 📱 Responsive components
- 🔧 Customizable with CSS custom properties
- 🎯 No JavaScript dependencies for styling

---

## Installation

### CDN (Recommended)

Add the following to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.css">
```

### Optional JavaScript

For interactive components like toasts and dark mode toggle:

```html
<script src="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.js"></script>
```

### Download

Download the CSS file directly from the [GitHub repository](https://github.com/OshekharO/Neubrutalism) and include it in your project:

```html
<link rel="stylesheet" href="path/to/neubrutalism.css">
```

---

## CSS Custom Properties

Customize Neubrutalism by overriding CSS custom properties in your stylesheet:

### Core Colors

```css
:root {
  --nb-primary: #000;        /* Primary color (black) */
  --nb-secondary: #fff;      /* Secondary color (white) */
  --nb-accent: #3498db;      /* Accent color for focus states */
}
```

### Status Colors

```css
:root {
  --nb-success: #2ecc71;     /* Success state */
  --nb-danger: #e74c3c;      /* Error/danger state */
  --nb-warning: #f39c12;     /* Warning state */
  --nb-info: #3498db;        /* Information state */
}
```

### Neutral Colors (Gray Scale)

```css
:root {
  --nb-gray-100: #f8f9fa;
  --nb-gray-200: #e9ecef;
  --nb-gray-300: #dee2e6;
  --nb-gray-400: #ced4da;
  --nb-gray-500: #adb5bd;
  --nb-gray-600: #6c757d;
  --nb-gray-700: #495057;
  --nb-gray-800: #343a40;
  --nb-gray-900: #212529;
}
```

### Border & Shadow

```css
:root {
  --nb-border-width: 2px;
  --nb-border-radius: 4px;
  --nb-shadow-offset: 4px;
  --nb-shadow-color: var(--nb-primary);
}
```

### Spacing

```css
:root {
  --nb-spacing-xs: 5px;
  --nb-spacing-sm: 10px;
  --nb-spacing-md: 15px;
  --nb-spacing-lg: 20px;
  --nb-spacing-xl: 30px;
}
```

### Typography

```css
:root {
  --nb-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --nb-font-size-sm: 0.8rem;
  --nb-font-size-base: 1rem;
  --nb-font-size-lg: 1.2rem;
  --nb-font-size-xl: 1.5rem;
}
```

### Transitions

```css
:root {
  --nb-transition-fast: 0.2s ease;
  --nb-transition-base: 0.3s ease;
}
```

---

## Typography

### Headings

All heading elements (h1-h6) are styled with bold weights and proper hierarchy:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Display Headings

For larger, more impactful headings:

```html
<p class="nb-display-1">Display 1</p>
<p class="nb-display-2">Display 2</p>
<p class="nb-display-3">Display 3</p>
<p class="nb-display-4">Display 4</p>
```

### Text Utilities

```html
<!-- Lead paragraph -->
<p class="nb-lead">Larger, emphasized text for introductions.</p>

<!-- Small text -->
<p class="nb-small">Small text for fine print.</p>

<!-- Muted text -->
<p class="nb-muted">Less prominent text.</p>

<!-- Marked/highlighted text -->
<span class="nb-mark">Highlighted text</span>

<!-- Keyboard keys -->
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

### Blockquote

```html
<blockquote class="nb-blockquote">
  Quote text goes here.
  <span class="nb-blockquote-author">- Author Name</span>
</blockquote>
```

### Code Block

```html
<pre class="nb-code-block"><code>function example() {
  return "Neubrutalism";
}</code></pre>
```

---

## Layout & Grid

### Containers

```html
<!-- Basic container -->
<div class="nb-container">Content</div>

<!-- Styled containers with shadows -->
<div class="container shadow">Container with shadow</div>
<div class="container-1 shadow-1">Purple themed container</div>
<div class="container-2 shadow-2">Yellow themed container</div>
<div class="container-3 shadow-3">Cyan themed container</div>
```

#### Container Sizes

```html
<div class="nb-container-sm">Small container (max-width: 540px)</div>
<div class="nb-container-md">Medium container (max-width: 720px)</div>
<div class="nb-container-lg">Large container (max-width: 960px)</div>
<div class="nb-container-xl">Extra large container (max-width: 1140px)</div>
<div class="nb-container-fluid">Fluid container (100% width)</div>
```

#### Container Styles

```html
<!-- Bordered container with shadow -->
<div class="nb-container-bordered">Bordered container</div>

<!-- Card-style container -->
<div class="nb-container-card">Card-style container with larger shadow</div>

<!-- Centered content -->
<div class="nb-container-center">Centered content</div>
```

#### Container Color Variants

```html
<div class="nb-container-primary">Primary colored container</div>
<div class="nb-container-success">Success colored container</div>
<div class="nb-container-warning">Warning colored container</div>
<div class="nb-container-danger">Danger colored container</div>
<div class="nb-container-info">Info colored container</div>
<div class="nb-container-light">Light colored container</div>
<div class="nb-container-dark">Dark colored container</div>
```

### Grid System

Responsive grid layouts with 1-6 columns:

```html
<!-- 3 column grid -->
<div class="nb-grid nb-grid-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 2 column grid -->
<div class="nb-grid nb-grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

Available classes: `nb-grid-1`, `nb-grid-2`, `nb-grid-3`, `nb-grid-4`, `nb-grid-5`, `nb-grid-6`

### Bordered Grid

```html
<div class="nb-grid-bordered nb-grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Masonry Grid

```html
<div class="nb-grid-masonry">
  <div class="nb-grid-masonry-item">Item 1</div>
  <div class="nb-grid-masonry-item nb-grid-masonry-item-tall">Tall Item</div>
  <div class="nb-grid-masonry-item">Item 3</div>
</div>
```

---

## Components

### Buttons

```html
<!-- Standard buttons -->
<button class="nb-btn">Default</button>
<button class="nb-btn nb-btn-small">Small</button>
<button class="nb-btn nb-btn-large">Large</button>
<button class="nb-btn nb-btn-rounded">Rounded</button>
<button class="nb-btn nb-btn-disabled" disabled>Disabled</button>
<button class="nb-btn nb-btn-block">Full Width</button>

<!-- Button with icon -->
<button class="nb-button">
  Click
  <svg class="icon" viewBox="0 0 24 24">...</svg>
</button>

<!-- Animated button -->
<button class="nb-btn-ani">Animate</button>
```

### Group

Group related elements together like buttons, badges, or tags.

```html
<!-- Button group -->
<div class="nb-group nb-group-shadow">
  <button class="nb-btn">Left</button>
  <button class="nb-btn">Middle</button>
  <button class="nb-btn">Right</button>
</div>

<!-- Vertical button group -->
<div class="nb-group nb-group-vertical nb-group-shadow">
  <button class="nb-btn">First</button>
  <button class="nb-btn">Second</button>
  <button class="nb-btn">Third</button>
</div>

<!-- Spaced group (with gaps) -->
<div class="nb-group nb-group-spaced">
  <button class="nb-btn">Option 1</button>
  <button class="nb-btn">Option 2</button>
  <button class="nb-btn">Option 3</button>
</div>

<!-- Badge group -->
<div class="nb-group">
  <span class="nb-badge nb-badge-primary">HTML</span>
  <span class="nb-badge nb-badge-success">CSS</span>
  <span class="nb-badge nb-badge-warning">JS</span>
</div>

<!-- Responsive group (stacks on mobile) -->
<div class="nb-group nb-group-responsive">
  <button class="nb-btn">Action 1</button>
  <button class="nb-btn">Action 2</button>
</div>
```

Available modifiers: `nb-group-shadow`, `nb-group-vertical`, `nb-group-spaced`, `nb-group-responsive`

### Badges

```html
<span class="nb-badge">Default</span>
<span class="nb-badge nb-badge-primary">Primary</span>
<span class="nb-badge nb-badge-success">Success</span>
<span class="nb-badge nb-badge-danger">Danger</span>
<span class="nb-badge nb-badge-warning">Warning</span>
<span class="nb-badge nb-badge-pill">Pill Badge</span>
```

### Tags

```html
<span class="nb-tag">Default</span>
<span class="nb-tag nb-tag-primary">Primary</span>
<span class="nb-tag nb-tag-success">Success</span>
<span class="nb-tag nb-tag-danger">Danger</span>
<span class="nb-tag nb-tag-warning">Warning</span>
<span class="nb-tag">Removable <span class="nb-tag-close">&times;</span></span>
```

### Cards

```html
<div class="nb-card">
  <div class="nb-card-header">Header</div>
  <div class="nb-card-body">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
  <div class="nb-card-footer">
    <button class="nb-btn nb-btn-small">Action</button>
  </div>
</div>

<!-- Card with image -->
<div class="nb-card">
  <img src="image.jpg" class="nb-card-image" alt="Description">
  <div class="nb-card-body">
    <h3>Card Title</h3>
    <p>Card content.</p>
  </div>
</div>
```

### Alerts

```html
<div class="nb-alert nb-alert-success">Success message!</div>
<div class="nb-alert nb-alert-danger">Error message!</div>
<div class="nb-alert nb-alert-warning">Warning message!</div>
<div class="nb-alert nb-alert-info">Info message!</div>

<!-- Simple alerts -->
<div class="alert-simple success">Simple success!</div>
<div class="alert-simple error">Simple error!</div>
```

### Tables

```html
<table class="nb-table">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</table>
```

Table modifiers: `nb-table-striped`, `nb-table-bordered`, `nb-table-hover`

#### Scrollable Table

Wrap tables in a scrollable container for wide tables on small screens:

```html
<div class="nb-table-scrollable">
  <div class="nb-table-hint">← Scroll horizontally to see more →</div>
  <table class="nb-table">
    <!-- table content -->
  </table>
</div>
```

#### Compact Table

A more condensed table variant:

```html
<table class="nb-table nb-table-compact">
  <!-- table content -->
</table>
```

#### Borderless Table

Clean table without heavy borders:

```html
<table class="nb-table nb-table-borderless">
  <!-- table content -->
</table>
```

#### Dense Table

Even more compact for data-heavy displays:

```html
<table class="nb-table nb-table-dense">
  <!-- table content -->
</table>
```

#### Row Highlights

Add contextual background colors to rows:

```html
<tr class="nb-row-success">...</tr>
<tr class="nb-row-danger">...</tr>
<tr class="nb-row-warning">...</tr>
<tr class="nb-row-info">...</tr>
```

### Progress Bars

```html
<div class="nb-progress">
  <div class="nb-progress-bar" style="width: 50%">50%</div>
</div>

<!-- Colored variants -->
<div class="nb-progress nb-progress-success">
  <div class="nb-progress-bar" style="width: 75%">75%</div>
</div>

<!-- Striped and animated -->
<div class="nb-progress nb-progress-striped nb-progress-animated">
  <div class="nb-progress-bar" style="width: 60%">Loading...</div>
</div>
```

### Spinners

```html
<!-- Circle spinners -->
<div class="nb-spinner nb-spinner-sm"></div>
<div class="nb-spinner"></div>
<div class="nb-spinner nb-spinner-lg"></div>

<!-- Color variants -->
<div class="nb-spinner nb-spinner-primary"></div>
<div class="nb-spinner nb-spinner-success"></div>
<div class="nb-spinner nb-spinner-danger"></div>

<!-- Square spinner -->
<div class="nb-spinner-square"></div>

<!-- Dots loader -->
<div class="nb-loader-dots">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### Modal

Pure CSS modal using the checkbox hack:

```html
<input class="nb-modal-state" id="modal-1" type="checkbox">
<div class="nb-modal">
  <label class="nb-modal-overlay" for="modal-1"></label>
  <div class="nb-modal-container">
    <label class="nb-modal-close" for="modal-1">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </label>
    <div class="nb-modal-content">
      <h2 class="nb-modal-title">Modal Title</h2>
      <div class="nb-modal-body">Modal content here.</div>
      <div class="nb-modal-footer">
        <label class="nb-btn" for="modal-1">Close</label>
      </div>
    </div>
  </div>
</div>

<!-- Trigger button -->
<label class="nb-btn" for="modal-1">Open Modal</label>
```

### Accordion

```html
<div class="nb-accordion">
  <div class="nb-accordion-item">
    <input type="checkbox" id="acc-1" class="nb-accordion-state">
    <label for="acc-1" class="nb-accordion-header">
      Question 1
      <span class="nb-accordion-icon">+</span>
    </label>
    <div class="nb-accordion-content">
      <p>Answer to question 1.</p>
    </div>
  </div>
</div>
```

### Tabs

```html
<div class="nb-tabs">
  <input class="nb-tab-input" name="tabs" type="radio" id="tab-1" checked>
  <label class="nb-tab-label" for="tab-1">Tab 1</label>
  <div class="nb-tab-panel">Tab 1 content</div>

  <input class="nb-tab-input" name="tabs" type="radio" id="tab-2">
  <label class="nb-tab-label" for="tab-2">Tab 2</label>
  <div class="nb-tab-panel">Tab 2 content</div>
</div>
```

### Scrollable Tabs

Perfect for scenarios with many tabs that don't fit on screen. Uses flexbox with order property to keep tab switching functionality working.

```html
<div class="nb-tabs-scrollable">
  <input class="nb-tab-input" name="scroll-tabs" type="radio" id="scroll-tab-1" checked>
  <label class="nb-tab-label" for="scroll-tab-1">Overview</label>
  
  <input class="nb-tab-input" name="scroll-tabs" type="radio" id="scroll-tab-2">
  <label class="nb-tab-label" for="scroll-tab-2">Features</label>
  
  <input class="nb-tab-input" name="scroll-tabs" type="radio" id="scroll-tab-3">
  <label class="nb-tab-label" for="scroll-tab-3">Documentation</label>
  
  <div class="nb-tab-panel">Overview content</div>
  <div class="nb-tab-panel">Features content</div>
  <div class="nb-tab-panel">Documentation content</div>
</div>
```

### Dropdown

```html
<div class="nb-dropdown nb-dropdown-primary">
  <button class="nb-dropdown-toggle">Select Option</button>
  <div class="nb-dropdown-menu">
    <a href="#" class="nb-dropdown-menu-item">Option 1</a>
    <a href="#" class="nb-dropdown-menu-item">Option 2</a>
    <a href="#" class="nb-dropdown-menu-item">Option 3</a>
  </div>
</div>
```

### Tooltips

```html
<span class="nb-tooltip" data-tooltip="Tooltip text!" tabindex="0">
  Hover me
</span>

<!-- Bottom tooltip -->
<span class="nb-tooltip nb-tooltip-bottom" data-tooltip="Bottom tooltip!">
  Hover me
</span>
```

### Breadcrumb

```html
<ul class="nb-breadcrumb">
  <li class="nb-breadcrumb-item"><a href="#">Home</a></li>
  <li class="nb-breadcrumb-item"><a href="#">Category</a></li>
  <li class="nb-breadcrumb-item active">Current Page</li>
</ul>
```

### Pagination

```html
<ul class="nb-pagination">
  <li class="nb-page-item nb-page-prev">
    <svg viewBox="0 0 24 24">...</svg>
  </li>
  <li class="nb-page-item active">1</li>
  <li class="nb-page-item">2</li>
  <li class="nb-page-item">3</li>
  <li class="nb-page-item nb-page-next">
    <svg viewBox="0 0 24 24">...</svg>
  </li>
</ul>
```

### Lists

```html
<!-- Basic list -->
<ul class="nb-list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered list -->
<ul class="nb-list nb-list-ordered">
  <li>First</li>
  <li>Second</li>
</ul>

<!-- Bullet list -->
<ul class="nb-list nb-list-bullet">
  <li>Bullet 1</li>
  <li>Bullet 2</li>
</ul>
```

### Avatar

```html
<img class="nb-avatar" src="avatar.jpg" alt="User avatar">
```

### Navbar

```html
<nav class="nb-navbar">
  <div class="nb-navbar-brand">
    <a href="#" class="nb-navbar-logo">Logo</a>
  </div>
  <input type="checkbox" id="navbar-toggle" class="nb-navbar-toggle-input">
  <label for="navbar-toggle" class="nb-navbar-toggle">
    <span></span>
    <span></span>
    <span></span>
  </label>
  <ol class="nb-nav">
    <li class="nb-nav-item"><a href="#">Home</a></li>
    <li class="nb-nav-item"><a href="#">About</a></li>
    <li class="nb-nav-item nb-nav-cta"><a href="#">Get Started</a></li>
  </ol>
</nav>
```

#### Navbar Variants

Color variants:
```html
<nav class="nb-navbar nb-navbar-dark">...</nav>
<nav class="nb-navbar nb-navbar-primary">...</nav>
<nav class="nb-navbar nb-navbar-success">...</nav>
<nav class="nb-navbar nb-navbar-warning">...</nav>
<nav class="nb-navbar nb-navbar-danger">...</nav>
<nav class="nb-navbar nb-navbar-transparent">...</nav>
```

Position variants:
```html
<!-- Fixed to top of viewport -->
<nav class="nb-navbar nb-navbar-fixed-top">...</nav>

<!-- Fixed to bottom of viewport -->
<nav class="nb-navbar nb-navbar-fixed-bottom">...</nav>

<!-- Sticky positioning -->
<nav class="nb-navbar nb-navbar-sticky">...</nav>

<!-- Centered navbar -->
<nav class="nb-navbar nb-navbar-centered">...</nav>
```

Size variants:
```html
<!-- Compact navbar -->
<nav class="nb-navbar nb-navbar-compact">...</nav>

<!-- Large navbar -->
<nav class="nb-navbar nb-navbar-large">...</nav>
```

### Nav Pills

Pill-style navigation tabs:

```html
<ul class="nb-nav-pills">
  <li class="nb-pill-item"><a href="#" class="nb-pill-link active">Home</a></li>
  <li class="nb-pill-item"><a href="#" class="nb-pill-link">Profile</a></li>
  <li class="nb-pill-item"><a href="#" class="nb-pill-link">Messages</a></li>
</ul>
```

#### Pills Color Variants

```html
<ul class="nb-nav-pills nb-nav-pills-primary">...</ul>
<ul class="nb-nav-pills nb-nav-pills-success">...</ul>
<ul class="nb-nav-pills nb-nav-pills-danger">...</ul>
<ul class="nb-nav-pills nb-nav-pills-warning">...</ul>
```

#### Pills Size Variants

```html
<!-- Small pills -->
<ul class="nb-nav-pills nb-nav-pills-sm">...</ul>

<!-- Large pills -->
<ul class="nb-nav-pills nb-nav-pills-lg">...</ul>
```

#### Pills Style Variants

```html
<!-- Square pills (no border-radius) -->
<ul class="nb-nav-pills nb-nav-pills-square">...</ul>

<!-- Vertical pills -->
<ul class="nb-nav-pills nb-nav-pills-vertical">...</ul>

<!-- Justified pills (equal width) -->
<ul class="nb-nav-pills nb-nav-pills-justified">...</ul>

<!-- Scrollable pills -->
<ul class="nb-nav-pills nb-nav-pills-scrollable">...</ul>

<!-- Bordered pills container -->
<ul class="nb-nav-pills nb-nav-pills-bordered">...</ul>
```

#### Pills with Badge

```html
<ul class="nb-nav-pills">
  <li class="nb-pill-item">
    <a href="#" class="nb-pill-link active">
      Inbox <span class="nb-pill-badge">5</span>
    </a>
  </li>
  <li class="nb-pill-item"><a href="#" class="nb-pill-link">Sent</a></li>
</ul>
```

### Footer

```html
<footer class="nb-footer-centered">
  <div class="nb-footer-logo">NB</div>
  <div class="nb-footer-text">© 2025 Your Company</div>
  <div class="nb-footer-socials">
    <a href="#" class="nb-social-icon">...</a>
  </div>
</footer>
```

### Hero Section

```html
<section class="nb-hero">
  <h1 class="nb-hero-title">Hero Title</h1>
  <p class="nb-hero-subtitle">Hero subtitle text.</p>
  <div class="nb-hero-actions">
    <a href="#" class="nb-btn nb-btn-large">Primary Action</a>
    <a href="#" class="nb-btn nb-btn-large">Secondary Action</a>
  </div>
</section>
```

### Feature Box

```html
<div class="nb-feature">
  <div class="nb-feature-icon">🎨</div>
  <h3 class="nb-feature-title">Feature Title</h3>
  <p class="nb-feature-text">Feature description.</p>
</div>
```

### Marquee

```html
<div class="nb-marquee">
  <div class="nb-marquee-content">Scrolling text content here</div>
</div>
```

### Carousel/Slider

```html
<div class="nb-slider">
  <div class="nb-slider-slides">
    <div class="nb-slider-slide">
      <img src="slide1.jpg" alt="Slide 1">
      <div class="nb-slider-caption"><h3>Slide 1</h3></div>
    </div>
    <div class="nb-slider-slide">
      <img src="slide2.jpg" alt="Slide 2">
      <div class="nb-slider-caption"><h3>Slide 2</h3></div>
    </div>
  </div>
</div>
```

### Newsletter

```html
<div class="nb-newsletter-card">
  <div class="nb-newsletter-card-content">
    <div class="nb-newsletter-icon">...</div>
    <h2 class="nb-newsletter-title">Subscribe</h2>
    <p class="nb-newsletter-subtitle">Stay updated</p>
    <form class="nb-newsletter-form">
      <input type="email" class="nb-newsletter-input" placeholder="Email">
      <button type="submit" class="nb-newsletter-btn">Subscribe</button>
    </form>
  </div>
</div>
```

### Testimonial

```html
<div class="nb-testimonial">
  <p>"Testimonial quote here." - Author</p>
</div>
```

---

## Form Elements

### Basic Form

```html
<div class="nb-pre-form">
  <form class="nb-form">
    <div class="nb-form-group">
      <input type="text" placeholder="Name" class="nb-form-input" required>
    </div>
    <div class="nb-form-group">
      <input type="email" placeholder="Email" class="nb-form-input" required>
    </div>
    <button type="submit" class="nb-form-btn">Submit</button>
  </form>
</div>
```

### Checkboxes

```html
<label class="nb-checkbox">
  Default
  <input type="checkbox">
  <span class="nb-checkbox-mark"></span>
</label>

<!-- Variants -->
<label class="nb-checkbox nb-checkbox-rounded">Rounded</label>
<label class="nb-checkbox nb-checkbox-outline">Outline</label>
<label class="nb-checkbox nb-checkbox-switch">Switch</label>
<label class="nb-checkbox nb-checkbox-success">Success</label>
<label class="nb-checkbox nb-checkbox-danger">Danger</label>
```

### Radio Buttons

```html
<label class="nb-radio">
  <input type="radio" name="group" checked>
  <span class="nb-radio-mark"></span>
  Option 1
</label>

<!-- Color variants -->
<label class="nb-radio nb-radio-success">...</label>
<label class="nb-radio nb-radio-danger">...</label>
```

### Range Slider

```html
<input type="range" class="nb-range" min="0" max="100" value="50">
```

### Switch Toggle

```html
<label class="nb-switch">
  <input type="checkbox">
  <span class="nb-switch-slider"></span>
</label>
```

### Input Group

```html
<div class="nb-input-group">
  <input type="text" class="nb-input" placeholder="Search...">
  <button class="nb-input-group-append">Search</button>
</div>
```

---

## Utilities

### Display

```css
.nb-flex         /* display: flex */
.nb-flex-column  /* flex-direction: column */
.nb-flex-center  /* justify-content: center; align-items: center */
.nb-flex-wrap    /* flex-wrap: wrap */
.nb-inline-flex  /* display: inline-flex */
.nb-block        /* display: block */
.nb-inline-block /* display: inline-block */
.nb-hidden       /* display: none */
```

### Text Alignment

```css
.nb-text-left      /* text-align: left */
.nb-text-center    /* text-align: center */
.nb-text-right     /* text-align: right */
.nb-text-uppercase /* text-transform: uppercase */
.nb-text-lowercase /* text-transform: lowercase */
.nb-text-capitalize /* text-transform: capitalize */
.nb-font-bold      /* font-weight: bold */
.nb-font-normal    /* font-weight: normal */
```

### Spacing

```css
/* Margin */
.nb-m-0  /* margin: 0 */
.nb-m-1  /* margin: 5px */
.nb-m-2  /* margin: 10px */
.nb-m-3  /* margin: 15px */
.nb-m-4  /* margin: 20px */

/* Padding */
.nb-p-0  /* padding: 0 */
.nb-p-1  /* padding: 5px */
.nb-p-2  /* padding: 10px */
.nb-p-3  /* padding: 15px */
.nb-p-4  /* padding: 20px */
```

### Width

```css
.nb-w-full  /* width: 100% */
.nb-w-auto  /* width: auto */
```

### Color Utilities

Background colors:
```css
.nb-bg-primary   /* Black background */
.nb-bg-secondary /* White background */
.nb-bg-success   /* Green background */
.nb-bg-danger    /* Red background */
.nb-bg-warning   /* Orange background */
.nb-bg-info      /* Blue background */
```

Text colors:
```css
.nb-text-primary
.nb-text-secondary
.nb-text-success
.nb-text-danger
.nb-text-warning
.nb-text-info
.nb-text-muted
```

---

## Dark Mode

### Automatic (System Preference)

Dark mode is automatically applied when the user's system preference is set to dark mode using the `prefers-color-scheme` media query.

### Manual Toggle

Add the `nb-dark` class to the `<html>` or `<body>` element:

```html
<html class="nb-dark">
```

### JavaScript Toggle

Using the included JavaScript:

```javascript
// Enable dark mode
toggleDarkMode(true);

// Disable dark mode
toggleDarkMode(false);

// Check if dark mode is enabled
if (isDarkMode()) {
  console.log("Dark mode is active");
}
```

### Custom Dark Mode Colors

Override dark mode colors:

```css
.nb-dark {
  --nb-primary: #fff;
  --nb-secondary: #1a1a1a;
  /* Add your custom dark mode colors */
}
```

---

## Accessibility

Neubrutalism CSS is built with accessibility in mind:

### Focus States

All interactive elements have visible focus states using `:focus-visible`:

```css
:focus-visible {
  outline: 2px solid var(--nb-accent);
  outline-offset: 2px;
}
```

### Reduced Motion

Animations are disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Skip Link

Add a skip link for keyboard navigation:

```html
<a href="#main-content" class="nb-skip-link">Skip to main content</a>
```

### Screen Reader Only

Hide content visually but keep it accessible to screen readers:

```html
<span class="nb-sr-only">Screen reader only text</span>
```

### ARIA Attributes

Use proper ARIA attributes for interactive components:

```html
<!-- Toast notifications -->
<div class="nb-toast" role="alert" aria-live="polite">...</div>

<!-- Modal dialogs -->
<div class="nb-modal" role="dialog" aria-modal="true">...</div>

<!-- Accordion -->
<button aria-expanded="true" aria-controls="panel-1">...</button>
```

---

## Browser Support

Neubrutalism CSS supports all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

### CSS Features Used

- CSS Custom Properties (CSS Variables)
- Flexbox
- CSS Grid
- `:focus-visible` pseudo-class
- `prefers-color-scheme` media query
- `prefers-reduced-motion` media query

---

## Examples

### Complete Page Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Neubrutalist Site</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="nb-navbar">
    <div class="nb-navbar-brand">
      <a href="#" class="nb-navbar-logo">Site</a>
    </div>
    <ol class="nb-nav">
      <li class="nb-nav-item"><a href="#">Home</a></li>
      <li class="nb-nav-item"><a href="#">About</a></li>
      <li class="nb-nav-item nb-nav-cta"><a href="#">Contact</a></li>
    </ol>
  </nav>

  <!-- Hero -->
  <section class="nb-hero">
    <h1 class="nb-hero-title">Welcome</h1>
    <p class="nb-hero-subtitle">A bold, minimalist design.</p>
    <div class="nb-hero-actions">
      <a href="#" class="nb-btn nb-btn-large">Get Started</a>
    </div>
  </section>

  <!-- Content -->
  <main class="nb-container">
    <div class="nb-grid nb-grid-3">
      <div class="nb-feature">
        <div class="nb-feature-icon">⚡</div>
        <h3 class="nb-feature-title">Fast</h3>
        <p class="nb-feature-text">Lightning quick performance.</p>
      </div>
      <div class="nb-feature">
        <div class="nb-feature-icon">🎨</div>
        <h3 class="nb-feature-title">Beautiful</h3>
        <p class="nb-feature-text">Stunning visual design.</p>
      </div>
      <div class="nb-feature">
        <div class="nb-feature-icon">🔧</div>
        <h3 class="nb-feature-title">Flexible</h3>
        <p class="nb-feature-text">Easy to customize.</p>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="nb-footer-centered">
    <div class="nb-footer-text">© 2025 My Site</div>
  </footer>

  <script src="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.js"></script>
</body>
</html>
```

### Contact Form

```html
<div class="nb-pre-form">
  <form class="nb-form">
    <div class="nb-form-group">
      <input type="text" placeholder="Full Name" class="nb-form-input" required>
    </div>
    <div class="nb-form-group">
      <input type="email" placeholder="Email" class="nb-form-input" required>
    </div>
    <div class="nb-form-group">
      <textarea placeholder="Message" class="nb-form-input" rows="4" required></textarea>
    </div>
    <button type="submit" class="nb-form-btn">Send Message</button>
  </form>
</div>
```

### Dashboard Card

```html
<div class="nb-card">
  <div class="nb-card-header">Dashboard</div>
  <div class="nb-card-body">
    <div class="nb-grid nb-grid-2">
      <div>
        <h4>Total Users</h4>
        <p class="nb-display-4">1,234</p>
      </div>
      <div>
        <h4>Revenue</h4>
        <p class="nb-display-4">$5,678</p>
      </div>
    </div>
    <div class="nb-progress nb-progress-success" style="margin-top: 20px;">
      <div class="nb-progress-bar" style="width: 75%">75% Goal</div>
    </div>
  </div>
</div>
```

---

## JavaScript API

### Toast Notifications

```javascript
// Create a default toast
createToast("Hello World!");

// Create a success toast
createToast("Success!", "success");

// Create a danger toast
createToast("Error!", "danger");

// Create a warning toast
createToast("Warning!", "warning");

// Custom duration (in milliseconds)
createToast("Custom duration", "default", 10000);
```

### Dark Mode

```javascript
// Enable dark mode
toggleDarkMode(true);

// Disable dark mode
toggleDarkMode(false);

// Check current state
const isDark = isDarkMode();
```

---

## License

Neubrutalism CSS is released under the [MIT License](https://github.com/OshekharO/Neubrutalism/blob/main/LICENSE).

---

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](https://github.com/OshekharO/Neubrutalism/blob/main/CONTRIBUTING.md) before submitting a pull request.

---

## Credits

Created by [Saksham Shekher](https://github.com/OshekharO)

Inspired by Brutalist web design principles and modern minimalist UI trends.
