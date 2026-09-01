# Neubrutalism CSS

A minimal CSS framework inspired by [Milligram](https://github.com/milligram/milligram), [Pico.css](https://github.com/picocss/pico), [Skeleton](https://github.com/dhg/Skeleton), [Chota](https://github.com/jenil/chota), [Water.css](https://github.com/kognise/water.css), and other minimal CSS libraries.

**Write standard HTML elements - they're automatically styled. Use classes only for variations.**

## Features

- **Semantic HTML First**: Standard elements like `<button>`, `<input>`, `<table>`, `<h1>`-`<h6>` are styled automatically
- **Optional Classes**: Use classes only for variations (colors, sizes) and layouts (grid, spacing)
- **Lightweight**: ~32KB minified, ~41KB unminified
- **No dependencies**: Pure CSS, no JavaScript required
- **Responsive**: Mobile-first design with responsive tables, navbar, and grid
- **Dark mode**: Manual toggle via CSS class
- **Customizable**: CSS custom properties for easy theming
- **Accessible**: Focus-visible states, reduced motion support, screen reader utilities

## Quick Start

### CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OshekharO/Neubrutalism@main/neubrutalism.min.css">
```

### Local
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
    <h1>Hello, World!</h1>
    <p>This is a minimal CSS framework.</p>
    <button>Click Me</button>
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

- **[Full Documentation](docs/index.html)** - Comprehensive guide with examples
- **[Live Demo](examples/neubrutalism-mini-example.html)** - See all components in action

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see [LICENSE](LICENSE) for details.
