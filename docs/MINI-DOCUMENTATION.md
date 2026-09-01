# Neubrutalism CSS Documentation

A classless-first CSS framework. Write HTML, it looks great.

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

That's it! No classes needed. The library automatically styles all HTML elements.

## Dark Mode

```html
<html class="nb-dark">
```

Or:

```html
<html data-theme="dark">
```

Toggle with JavaScript:

```javascript
document.documentElement.classList.toggle('nb-dark');
```

---

## Elements Reference

### Typography

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<p>Paragraph with <strong>bold</strong> and <em>italic</em>.</p>
<p>And a <a href="#">link</a>.</p>
```

### Links & Text

```html
<a href="#">Regular link</a>
<strong>Bold text</strong>
<em>Italic text</em>
<small>Small text</small>
```

### Blockquotes

```html
<blockquote>
  <p>Design is not just what it looks like. Design is how it works.</p>
  <cite>— Steve Jobs</cite>
</blockquote>
```

### Code

```html
<p>Use the <code>console.log()</code> function.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<pre><code>function hello() {
  console.log("Hello, World!");
}</code></pre>
```

### Lists

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

### Horizontal Rule

```html
<hr>
```

---

### Buttons

```html
<button>Primary Button</button>
<input type="submit" value="Submit">
<input type="button" value="Click">
<input type="reset" value="Reset">
```

---

### Forms

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <p>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter name">
    </p>
    
    <p>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter email">
    </p>
    
    <p>
      <label for="password">Password</label>
      <input type="password" id="password">
    </p>
    
    <p>
      <label for="country">Country</label>
      <select id="country">
        <option>Select...</option>
        <option>USA</option>
        <option>UK</option>
      </select>
    </p>
    
    <p>
      <label for="message">Message</label>
      <textarea id="message" placeholder="Your message..."></textarea>
    </p>
    
    <p>
      <label for="volume">Volume</label>
      <input type="range" id="volume" min="0" max="100">
    </p>
    
    <p>
      <label>
        <input type="checkbox"> Remember me
      </label>
    </p>
    
    <p>
      <label><input type="radio" name="contact" checked> Email</label>
      <label><input type="radio" name="contact"> Phone</label>
    </p>
    
    <p>
      <button type="submit">Submit</button>
    </p>
  </fieldset>
</form>
```

---

### Tables

Tables are automatically responsive — they scroll horizontally on mobile.

```html
<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
      <td>+5%</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
      <td>+20%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$22,000</td>
      <td>+12.5%</td>
    </tr>
  </tfoot>
</table>
```

---

### Accordion

```html
<details>
  <summary>Section Title</summary>
  <p>Content that expands and collapses.</p>
</details>

<details open>
  <summary>Open by Default</summary>
  <p>This section starts expanded.</p>
</details>
```

---

### Progress

```html
<progress value="70" max="100">70%</progress>
```

---

### Images & Figures

```html
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image caption</figcaption>
</figure>
```

---

### Sections

```html
<header>
  <nav>
    <strong>Brand</strong>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </nav>
</header>

<main>
  <section>
    <h2>Section Title</h2>
    <p>Content...</p>
  </section>
  
  <article>
    <h3>Article Title</h3>
    <p>Article content...</p>
  </article>
  
  <aside>
    <h4>Sidebar</h4>
    <p>Additional info...</p>
  </aside>
</main>

<footer>
  <p>© 2024 Your Name</p>
</footer>
```

---

## Customization

Override CSS custom properties to customize the theme:

```css
:root {
  --nb-primary: #6200ea;
  --nb-bg: #fafafa;
  --nb-text: #1a1a1a;
  --nb-border-radius: 0.75rem;
  --nb-font-family: 'Inter', sans-serif;
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--nb-primary` | `#2563eb` | Primary/accent color |
| `--nb-primary-hover` | `#1d4ed8` | Primary hover state |
| `--nb-bg` | `#ffffff` | Background color |
| `--nb-bg-alt` | `#f8fafc` | Alternate background |
| `--nb-text` | `#1e293b` | Text color |
| `--nb-text-muted` | `#64748b` | Muted text color |
| `--nb-border` | `#e2e8f0` | Border color |
| `--nb-radius` | `0.5rem` | Border radius |
| `--nb-shadow` | ... | Small shadow |
| `--nb-font-family` | system-ui | Font family |
| `--nb-mono` | monospace | Monospace font |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see LICENSE file for details.
