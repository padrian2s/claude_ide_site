# Code Style & Conventions

## CSS
- CSS variables defined in `:root` for theming
- Gruvbox-inspired dark color palette
- Component-based class naming (e.g., `.terminal-window`, `.terminal-header`)
- BEM-like naming conventions (`.status-item.active`, `.btn.btn-primary`)
- Responsive design considerations
- Font families: JetBrains Mono (code/terminal), Inter (UI text)

## JavaScript
- Vanilla JS, no frameworks
- Functions use camelCase naming
- DOM manipulation via `getElementById` and `querySelector`
- Event listeners attached via `addEventListener`
- Async operations handled with Promises (clipboard API)

## HTML
- Semantic HTML5 elements (`<header>`, `<section>`, `<footer>`)
- Material Icons for iconography
- Class-based styling (no inline styles)
- Comments for section markers (`<!-- Hero Section -->`)
- IDs used for JavaScript targeting and anchor links

## General Patterns
- Mobile-first responsive design
- CSS custom properties for theme consistency
- Minimal dependencies (Google Fonts, Material Icons only)
- Self-contained components
