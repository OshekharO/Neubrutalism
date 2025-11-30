# Neubrutalism CSS

A modern, minimalist CSS library that embraces bold design principles, high-contrast aesthetics, and a no-nonsense approach to web design. Inspired by the Brutalist architecture movement, this library focuses on raw, honest, and functional design.

## 🚀 Quick Start

Get started in seconds with the CDN:

```html
<!-- Add to your HTML head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.css">

<!-- Optional: For interactive components (toasts, dark mode toggle) -->
<script src="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.js"></script>
```

## 📚 Documentation & Examples

- **[Full Documentation](docs/DOCUMENTATION.md)** - Comprehensive guide with all components and utilities
- **[Starter Template](examples/starter-template.html)** - Ready-to-use landing page template
- **[Dashboard Example](examples/dashboard.html)** - Admin dashboard layout example

## ✨ Key Features

- 🎨 **High-contrast design** - Bold black and white with striking shadows
- ⚡ **Lightweight** - ~70KB unminified, no dependencies
- 🌙 **Dark mode** - Automatic (system preference) or manual toggle
- ♿ **Accessible** - Focus-visible states, reduced motion support, screen reader friendly
- 📱 **Responsive** - Mobile-first design with flexible components
- 🔧 **Customizable** - Easy theming with CSS custom properties
- 🧩 **40+ Components** - Everything you need to build modern UIs

## 🧩 Components

| Category | Components |
|----------|------------|
| **Typography** | Headings, Display text, Blockquotes, Code blocks |
| **Buttons** | Standard, Animated, Icon buttons, Button groups |
| **Cards** | Content cards, Headers, Footers, Images |
| **Forms** | Inputs, Checkboxes, Radio, Switches, Range sliders, Input groups |
| **Navigation** | Navbar, Breadcrumbs, Pagination, Tabs |
| **Feedback** | Alerts, Toasts, Badges, Progress bars, Spinners |
| **Data Display** | Tables, Lists, Avatars, Tags, Timeline, Rating |
| **Overlays** | Modals, Dropdowns, Tooltips, Accordion |
| **Layout** | Grid system (1-6 columns), Containers, Masonry |
| **Utilities** | Colors, Spacing, Display, Text alignment |

## 🌙 Dark Mode

```javascript
// Toggle dark mode
toggleDarkMode(true);  // Enable
toggleDarkMode(false); // Disable

// Check current state
if (isDarkMode()) {
  console.log("Dark mode is active");
}
```

Or add the class manually:
```html
<html class="nb-dark">
```

## 🎨 Customization

Override CSS custom properties to match your brand:

```css
:root {
  --nb-primary: #000;
  --nb-secondary: #fff;
  --nb-accent: #3498db;
  --nb-success: #2ecc71;
  --nb-danger: #e74c3c;
  --nb-warning: #f39c12;
  --nb-border-width: 2px;
  --nb-shadow-offset: 4px;
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📋 Changelog

- ✅ Comprehensive documentation
- ✅ 5 new components (Skeleton, Timeline, Stepper, Rating, Empty State)
- ✅ Improved responsive design across all screen sizes
- ✅ Mobile navigation with slide-out menu
- ✅ Dark mode support
- ✅ Example templates

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🌟 Credits

Created by [Saksham Shekher](https://github.com/OshekharO)

### Give a ⭐ if you like the project!
