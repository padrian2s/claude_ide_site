# Development Commands

## Local Development
Since this is a static site, you can serve it locally with any HTTP server:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node.js (if npx available)
npx serve

# Open in browser
open http://localhost:8000
```

## Git Operations
```bash
# Check status
git status

# Stage and commit
git add .
git commit -m "message"

# Push to remote
git push origin <branch>
```

## Deployment
The site is deployed via GitHub Pages (indicated by CNAME file).
Pushing to the main branch typically triggers deployment.

## No Build Process
This is a static site with no build step required:
- No bundler (webpack, vite, etc.)
- No CSS preprocessor
- No TypeScript compilation
- Just edit files and refresh browser
