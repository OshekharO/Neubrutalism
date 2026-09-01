# Neubrutalism CSS

A **classless-first** CSS framework. Just write HTML — it automatically looks great.

## Philosophy

**No classes needed for basic styling.** Write standard semantic HTML and everything is automatically styled. Classes are only for optional variations.

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="neubrutalism.min.css">
</head>
<body>
  <header>
    <nav>
      <strong>My Brand</strong>
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome</h1>
    <p>Your content here.</p>
    <button>Click Me</button>
  </main>
  
  <footer>
    <p>© 2024 My Website</p>
  </footer>
</body>
</html>
```

## What's Automatically Styled (No Classes Needed)

| Element | Description |
|---------|-------------|
| `h1`-`h6` | Headings with proper hierarchy |
| `p` | Paragraphs with max-width for readability |
| `a` | Links with hover states |
| `ul`, `ol`, `li` | Lists with proper spacing |
| `blockquote` | Styled blockquotes with border |
| `code`, `kbd`, `pre` | Code blocks and inline code |
| `button` | All button types styled |
| `input`, `textarea`, `select` | All form elements styled |
| `table` | Responsive tables (scroll on mobile) |
| `img`, `video` | Responsive media |
| `header`, `nav`, `main`, `footer` | Layout elements |
| `article`, `section`, `aside` | Content sections |
| `details`, `summary` | Accordion styling |
| `fieldset`, `legend` | Form grouping |
| `figure`, `figcaption` | Image captions |
| `hr` | Horizontal rules |

## Dark Mode

Add a single class to enable dark mode:

```html
<html class="nb-dark">
```

Or with data attribute:

```html
<html data-theme="dark">
```

## Optional Classes

While the library works without classes, these are available for variations:

| Class | Use Case |
|-------|----------|
| `.nb-dark` or `[data-theme="dark"]` | Dark mode |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see [LICENSE](LICENSE) for details.
