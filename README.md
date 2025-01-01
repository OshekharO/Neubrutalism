# Neubrutalism CSS

<p align="center">
  <img src="icon/neubrutalism.png" alt="Neubrutalism CSS Logo" width="200">
</p>

<div align="center">
  
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/OshekharO/Neubrutalism?style=social)](https://github.com/OshekharO/Neubrutalism/stargazers)

</div>

A modern, minimalist CSS library that embraces bold design principles, high-contrast aesthetics, and a no-nonsense approach to web design. Inspired by the Brutalist architecture movement, this library focuses on raw, honest, and functional design while maintaining modern web standards.

## 📚 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Minimalist Design System**
  - High-contrast black and white aesthetics
  - Bold borders and distinctive box shadows
  - Clean, readable typography
  - Purposeful use of white space

- **Modern Development**
  - Lightweight (~19KB minified)
  - No dependencies
  - Mobile-first responsive design
  - CSS Custom Properties for easy theming

- **Component Library**
  - Buttons and form elements
  - Navigation components
  - Cards and containers
  - Typography utilities
  - Grid system

## 🚀 Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.css">
```

### NPM

```bash
npm install neubrutalism-css
```

### Download

Download the latest version from the [releases page](https://github.com/OshekharO/Neubrutalism/releases).

## 🎨 Usage

1. Include the CSS file in your HTML:
```html
<link rel="stylesheet" href="path/to/neubrutalism.css">
```

2. Add Neubrutalism classes to your HTML elements:
```html
<button class="neu-button">Click Me</button>
<div class="neu-card">
  <h2>Card Title</h2>
  <p>Card content goes here.</p>
</div>
```

## 🧩 Components

### Buttons
```html
<button class="neu-button">Default Button</button>
<button class="neu-button neu-button--primary">Primary Button</button>
<button class="neu-button neu-button--secondary">Secondary Button</button>
```

### Cards
```html
<div class="neu-card">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>
```

### Forms
```html
<input type="text" class="neu-input" placeholder="Enter text">
<select class="neu-select">
  <option>Select an option</option>
</select>
```

### Navigation
```html
<nav class="neu-nav">
  <ul>
    <li><a href="#" class="neu-nav-link">Home</a></li>
    <li><a href="#" class="neu-nav-link">About</a></li>
  </ul>
</nav>
```

## ⚙️ Customization

Neubrutalism CSS uses CSS Custom Properties for easy theming:

```css
:root {
  --neu-primary: #000000;
  --neu-secondary: #ffffff;
  --neu-accent: #ff0000;
  --neu-shadow-offset: 4px;
  --neu-border-radius: 0px;
}
```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Opera (last 2 versions)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to:

- Report bugs
- Suggest enhancements
- Submit pull requests
- Follow our coding standards

## 📋 Roadmap

- [ ] Dark mode support
- [ ] Additional component variations
- [ ] Animation library
- [ ] CSS-in-JS support
- [ ] Framework-specific implementations (React, Vue, etc.)
- [ ] Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Brutalist architecture and web design principles
- Thanks to all our [contributors](https://github.com/OshekharO/Neubrutalism/graphs/contributors)

---

### Give a ⭐ if you like this project!
