# Neubrutalism CSS

A minimal CSS framework inspired by [Milligram](https://github.com/milligram/milligram), [Pico.css](https://github.com/picocss/pico), [Skeleton](https://github.com/dhg/Skeleton), [Chota](https://github.com/jenil/chota), [Water.css](https://github.com/kognise/water.css), and other minimal CSS libraries.

## Features

- **Lightweight**: ~12KB minified, ~45KB unminified
- **No dependencies**: Pure CSS, no JavaScript required
- **Responsive**: Mobile-first design with responsive tables, navbar, and grid
- **Dark mode**: Manual toggle via CSS class
- **Customizable**: CSS custom properties for easy theming
- **Accessible**: Focus-visible states, reduced motion support, screen reader utilities
- **Semantic**: Works with plain HTML elements, optional utility classes

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

## Dark Mode

### Toggle
```javascript
document.documentElement.classList.toggle('nb-dark');
```

Or add the class directly:
```html
<html class="nb-dark">
<!-- or -->
<html data-theme="dark">
```

## Components

| Category | Components |
|----------|------------|
| **Typography** | Headings, paragraphs, links, blockquotes, code, text utilities |
| **Layout** | Container, 12-column grid, flex utilities, spacing utilities, responsive tables |
| **Buttons** | Primary, outline, secondary, success, danger, link, sizes, groups |
| **Forms** | Inputs, textarea, select, checkboxes, radios, range, input groups |
| **Navigation** | Navbar (responsive), breadcrumb, pagination |
| **Content** | Cards, tables, badges, alerts, lists, accordion |
| **Feedback** | Progress bars, spinners, tooltips, modals |
| **Components** | Avatars, empty states, skeleton loading, aspect ratios, dividers |
| **Utilities** | Display, spacing, width, borders, backgrounds, shadows, position, animations |

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

## Documentation

- **[Full Documentation](docs/MINI-DOCUMENTATION.md)** - Comprehensive guide with all components and utilities
- **[Live Example](examples/neubrutalism-mini-example.html)** - Demo page showcasing all components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see [LICENSE](LICENSE) for details.
