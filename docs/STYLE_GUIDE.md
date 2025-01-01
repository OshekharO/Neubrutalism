# Neubrutalism CSS Style Guide

This style guide outlines the design principles, coding standards, and best practices for using and contributing to Neubrutalism CSS.

## Design Principles

### 1. Bold and Honest

- Use high contrast colors
- Implement strong borders and shadows
- Keep layouts simple and straightforward
- Embrace asymmetry when appropriate

### 2. Functional First

- Prioritize usability over aesthetics
- Ensure all components are fully accessible
- Maintain clear visual hierarchy
- Keep interactions intuitive

### 3. Responsive by Default

- Design mobile-first
- Use flexible layouts
- Implement breakpoints consistently
- Test across different devices

## CSS Coding Standards

### 1. Naming Conventions

We follow BEM (Block Element Modifier) methodology:

```css
/* Block */
.neu-button { }

/* Element */
.neu-button__icon { }

/* Modifier */
.neu-button--primary { }
```

### 2. File Organization

```
styles/
├── base/
│   ├── _reset.css
│   ├── _typography.css
│   └── _variables.css
├── components/
│   ├── _buttons.css
│   ├── _cards.css
│   └── _forms.css
├── layouts/
│   ├── _grid.css
│   └── _navigation.css
└── utilities/
    ├── _spacing.css
    └── _display.css
```

### 3. CSS Custom Properties

```css
:root {
  /* Color System */
  --neu-color-primary: #000000;
  --neu-color-secondary: #ffffff;
  --neu-color-accent: #ff0000;
  
  /* Typography Scale */
  --neu-font-size-xs: 0.75rem;
  --neu-font-size-sm: 0.875rem;
  --neu-font-size-base: 1rem;
  --neu-font-size-lg: 1.125rem;
  --neu-font-size-xl: 1.25rem;
  
  /* Spacing Scale */
  --neu-spacing-1: 0.25rem;
  --neu-spacing-2: 0.5rem;
  --neu-spacing-3: 1rem;
  --neu-spacing-4: 1.5rem;
  --neu-spacing-5: 2rem;
}
```

### 4. Media Queries

```css
/* Mobile First Approach */
@media (min-width: 640px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 1024px) { /* Large devices */ }
@media (min-width: 1280px) { /* Extra large devices */ }
```

## Accessibility Guidelines

### 1. Color Contrast

- Maintain WCAG 2.1 AA standard minimum contrast ratios
- Provide sufficient color contrast for text and interactive elements
- Don't rely solely on color to convey information

### 2. Keyboard Navigation

- Ensure all interactive elements are focusable
- Implement logical tab order
- Provide visible focus indicators

### 3. ARIA Labels

```html
<!-- Example of proper ARIA usage -->
<button class="neu-button" aria-label="Close dialog">
  <span class="neu-icon">×</span>
</button>
```

## Performance Guidelines

### 1. CSS Optimization

- Minimize redundant styles
- Use shorthand properties when possible
- Avoid deep nesting
- Implement critical CSS for above-the-fold content

### 2. Asset Optimization

- Optimize images and icons
- Use appropriate image formats
- Implement lazy loading where applicable
- Minimize HTTP requests

## Documentation Standards

### 1. Component Documentation

```css
/**
 * Component: Button
 * Description: Standard button component with various states and modifiers
 *
 * Modifiers:
 * - neu-button--primary: Primary action button
 * - neu-button--secondary: Secondary action button
 * - neu-button--small: Small-sized button
 * - neu-button--large: Large-sized button
 *
 * States:
 * - :hover: Button hover state
 * - :active: Button active state
 * - :disabled: Button disabled state
 */
```

### 2. Code Comments

```css
/* Section comment block
   ========================================================================== */

/* Subsection comment block
   -------------------------------------------------------------------------- */

/* Basic comment */
```

## Git Workflow

### 1. Branch Naming

- feature/feature-name
- bugfix/bug-description
- hotfix/issue-description
- release/version-number

### 2. Commit Messages

```
type: Subject line

Body (optional)

Footer (optional)
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Opera (last 2 versions)

## Testing Guidelines

### 1. Cross-browser Testing

- Test in all supported browsers
- Verify responsive breakpoints
- Check hover and active states
- Validate forms and interactions

### 2. Accessibility Testing

- Use screen readers
- Test keyboard navigation
- Verify ARIA attributes
- Check color contrast

### 3. Performance Testing

- Measure load times
- Check CSS specificity
- Validate responsive images
- Monitor CSS bundle size
