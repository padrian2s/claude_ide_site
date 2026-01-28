# Claude IDE Website

## Purpose
This is a static promotional/landing website for "Claude IDE" - a terminal-based development environment built on tmux and Python TUI frameworks. The website showcases the features and philosophy of the IDE.

## Tech Stack
- **HTML5** - Single page application structure (`index.html`)
- **CSS3** - Custom styling with CSS variables, Gruvbox-inspired theme (`style.css`)
- **Vanilla JavaScript** - Interactive features like video modal (`script.js`)
- **Fonts**: JetBrains Mono (monospace), Inter (sans-serif) via Google Fonts
- **Icons**: Material Icons

## Project Structure
```
claude-ide-site/
├── index.html            # Main landing page
├── style.css             # All styles (Gruvbox-inspired theme)
├── script.js             # Interactive features (video modal, copy commands)
├── keyboard.html         # Keyboard visualization prototype
├── keyboard-logitech.html # Logitech-style keyboard visualization (embedded)
├── Claude_Prompt.mp4     # Demo video
├── CLAUDE_IDE_STORY.md   # Documentation/feature overview
├── CNAME                 # GitHub Pages custom domain
├── get                   # Install script
└── uninstall             # Uninstall script
```

## Key Features of the Website
- Hero section with ASCII art terminal display
- Interactive keyboard F-key visualization (iframe)
- Video modal for demo playback
- Status bar preview section
- Feature grid showcasing IDE capabilities
- Get Started section with copy-to-clipboard install commands
