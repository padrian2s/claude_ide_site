# Claude IDE: Your Terminal, Reimagined

**A complete workspace that lives in your terminal. No browser. No Electron. Just pure productivity.**

---

## The Vision

What if your entire development workflow lived in one place?

Not tabs in a browser. Not 15 different apps. Not "let me just check Slack real quick."

**One terminal. One session. Everything at your fingertips.**

Press an F-key. You're there.

---

## The Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│  F1:Term1  F2:Term2  F3:Tree  F4:Lizard  F5:Glow  F6:Favs   │
│  F7:Prompt  F9:Config  F10:Exit  F12:Keys                   │
└─────────────────────────────────────────────────────────────┘
```

---

## F1/F2: Twin Terminals

Two shells. Always ready.

- Run your Claude Code in F1
- Run your backend/frontend in F2
- Switch instantly with a keypress

No splitting. No resizing. Full screen, full focus.

---

## F3: Tree View + Smart Search

**Not just a file browser. A code navigator.**

```
┌──────────────┬────────────────────────────────────────┐
│ src/         │                                        │
│   api/       │   // Your file content here            │
│   utils/     │   // Syntax highlighted                │
│   main.py    │   // Scroll with j/k                   │
│ tests/       │                                        │
└──────────────┴────────────────────────────────────────┘
```

**The magic:**
- `Ctrl+P` - **Fuzzy find files** (fzf-powered)
- `Ctrl+F` - **Grep search** (ripgrep + fzf)
- `Enter` - View file instantly
- `Tab` - Switch between tree and viewer

Find anything in milliseconds. Not minutes.

---

## F4: Lizard - Code Complexity Analyzer

**Know your code's health at a glance.**

```
┌────────────────────────────────────────────────────────────────┐
│  Code Complexity Analysis                                      │
├────────────────────────────────────────────────────────────────┤
│  File                    │ Func              │ CC  │ LOC │     │
│ ─────────────────────────┼───────────────────┼─────┼─────┼──── │
│  src/api/auth.py         │ validate_token    │  12 │  45 │ !!  │
│  src/api/auth.py         │ refresh_session   │   8 │  32 │ !   │
│  src/services/user.py    │ create_user       │   4 │  28 │ ok  │
│  src/services/user.py    │ update_profile    │   3 │  22 │ ok  │
│  src/utils/helpers.py    │ parse_config      │  15 │  67 │ !!  │
└────────────────────────────────────────────────────────────────┘
 Total: 847 LOC │ Avg CC: 6.2 │ Functions: 43 │ Files: 12
```

**Powered by [Lizard](https://github.com/terryyin/lizard)** - the open-source code complexity analyzer.

### What It Measures

| Metric | What It Tells You |
|--------|-------------------|
| **Cyclomatic Complexity (CC)** | How many paths through your code (lower = simpler) |
| **Lines of Code (LOC)** | Function length (shorter = maintainable) |
| **Token Count** | Code density |
| **Parameter Count** | Function signature complexity |

### Complexity Thresholds

| CC Score | Status | Meaning |
|----------|--------|---------|
| 1-5 | OK | Simple, easy to test |
| 6-10 | WARNING | Consider refactoring |
| 11+ | CRITICAL | Too complex, hard to maintain |

### Why It Matters

```
Before: "This function feels messy..."

After:  "validate_token() has CC=12, needs refactoring"
```

**Data-driven code quality.**

### Language Support

Lizard analyzes 20+ languages:
- Python, JavaScript, TypeScript
- C, C++, Java, C#
- Go, Rust, Swift
- Ruby, PHP, Scala
- And more...

### The Insight

> "If you can't measure it, you can't improve it."

Traditional IDEs show syntax errors.
**Lizard shows design errors.**

That function with 15 nested if-statements?
Lizard sees it. Lizard judges it.

---

## F5: Glow - Markdown Viewer

Beautiful markdown rendering in the terminal.

- README files that actually look good
- Documentation without leaving your flow
- Syntax highlighting for code blocks

Because `cat README.md` is ugly.

---

## F6: Favorites - Project Navigator

**Your projects. One keypress away.**

```
┌─────────────────────┬─────────────────────┐
│   All Folders       │   * Favorites       │
├─────────────────────┼─────────────────────┤
│   work/api-server   │ * work/main-app     │
│ * work/main-app     │ * personal/dotfiles │
│   work/microservice │ * personal/my_env   │
│   personal/blog     │                     │
└─────────────────────┴─────────────────────┘
```

- `/` - Search folders instantly
- `Enter` - Add to favorites
- `Space` - **Copy path to clipboard**
- `Tab` - Switch panels
- `a` - Admin: manage root folders

**Configure once. Navigate forever.**

Your `~/work` and `~/personal` folders scanned automatically. Star what matters. Copy paths with a keypress.

---

## F7: Prompt Writer - AI-Powered Editor

**Where your prompts become powerful.**

```
┌────────────────────────────────────────────────────────────┐
│ # API Design Prompt                                        │
│                                                            │
│ Create a REST API for user management with_                │
│                                    ┌──────────────┐        │
│                                    │ 1 with       │        │
│                                    │ 2 without    │        │
│                                    │ 3 within     │        │
│                                    └──────────────┘        │
└────────────────────────────────────────────────────────────┘
 ^q Quit  ^s Save  ^c Copy  ^n New  ^g AI  ^t Tmpl
```

### Smart Autocomplete
- 1,300+ technical words built-in
- **Learns as you type** - use a word once, it remembers
- Press `1`, `2`, `3` to quick-select suggestions

### AI Enhancement (Ctrl+G)
Watch Claude rewrite your prompt in real-time:

| Level | Effect |
|-------|--------|
| Little | Fix typos |
| Medium | Improve clarity |
| Deep | Restructure |
| Aggressive | Full prompt engineering |

**Stream - Watch - Edit - Accept**

The AI suggests. You decide. Edit right in the preview before accepting.

### One-Key Actions
- `Ctrl+C` - Copy everything to clipboard
- `Ctrl+S` - Save to `prompts/` folder
- `Ctrl+T` - Insert templates (Basic, Role-based, Chain-of-thought, Code)
- `Ctrl+G` - AI Enhancement with streaming preview

---

## F9: Config Panel

**Make it yours.**

```
┌──────────────────────────────────────┐
│        Status Bar Theme              │
├──────────────────────────────────────┤
│ > Catppuccin Mocha    [sample]       │
│   Tokyo Night         [sample]       │
│   Gruvbox Dark        [sample]       │
│   Dracula             [sample]       │
│   Nord                [sample]       │
└──────────────────────────────────────┘
  Enter: Apply  |  p: Toggle Position  |  q: Quit
```

- 8 beautiful themes
- Status bar top or bottom
- Changes apply instantly
- Persisted across sessions

---

## Navigation That Makes Sense

| Key | Action |
|-----|--------|
| `F1-F7, F9` | Jump to window |
| `Shift+Left/Right` | Previous/Next window |
| `F10` | Exit (kill session) |
| `F12` | Toggle passthrough mode |

### Passthrough Mode (F12)
Some apps need F-keys? Toggle passthrough:
- **OFF**: F-keys switch windows
- **ON**: F-keys go to the app

Status bar shows `PASSTHROUGH` when active.

---

## The Architecture

```
tmux session "claude-ide-{pid}"
│
├── Window 1 (F1): Terminal 1 ──────── zsh
├── Window 2 (F2): Terminal 2 ──────── zsh
├── Window 3 (F3): Tree ────────────── Python/Textual
├── Window 4 (F4): Lizard ──────────── Python/Textual + Lizard
├── Window 5 (F5): Glow ────────────── Go binary
├── Window 6 (F6): Favorites ───────── Python/Textual
├── Window 7 (F7): Prompt Writer ───── Python/Textual + Claude API
└── Window 9 (F9): Config ──────────── Python/Textual
```

**Why tmux?**
- Real terminal multiplexing (not fake PTY hacks)
- Session survives disconnects
- Works over SSH
- Battle-tested for decades

**Why Textual?**
- Modern Python TUI framework
- Beautiful by default
- Reactive, like React for terminals
- CSS-like styling

---

## What You Get

```
my_env/
├── tui_env.py          # Main launcher
├── tree_view.py        # File browser + viewer
├── config_panel.py     # Theme settings
├── favorites.py        # Project navigator
├── prompt_writer.py    # AI prompt editor
├── prompt_words.txt    # 1,300+ word corpus
├── lizard_tui.py       # Code complexity analyzer
├── start.sh            # Quick launcher
└── CLAUDE.md           # Documentation
```

---

## Getting Started

```bash
# Install dependencies
brew install tmux fzf ripgrep glow
pip install textual anthropic lizard

# Set up AI (optional, for Prompt Writer)
export ANTHROPIC_API_KEY="your-key"

# Launch
./start.sh
# or
python tui_env.py
```

---

## The Philosophy

### 1. Keyboard First
Every action has a keybinding. Your hands never leave home row.

### 2. Focus, Not Features
Each window does one thing well. No feature bloat.

### 3. Terminal Native
Works in any terminal. Over SSH. In a container. On a Raspberry Pi.

### 4. AI Augmented, Human Controlled
AI helps write. You decide what stays.

### 5. Data-Driven Quality
Don't guess if code is complex. Measure it.

### 6. Composable
Add your own windows. Modify existing ones. It's just Python and tmux.

---

## Who Is This For?

- **Terminal lovers** who live in the command line
- **Developers** tired of Electron apps eating RAM
- **Writers** who want distraction-free AI assistance
- **Power users** who value keyboard efficiency
- **Teams** who care about code quality metrics
- **Minimalists** who believe less is more

---

## The Future

This isn't just a collection of tools.

It's a **philosophy**:

> Your workspace should be fast, focused, and AI-augmented—without leaving the terminal.

While others build browser-based IDEs that need 16GB RAM...

We build tools that run on a VPS with 512MB.

While others require constant internet...

Our core tools work offline.

While others break with every update...

We use battle-tested foundations: tmux, Python, Unix.

---

## Start Your Session

```bash
./start.sh
```

```
┌─────────────────────────────────────────────────────────────┐
│  F1:Term1  F2:Term2  F3:Tree  F4:Lizard  F5:Glow  F6:Favs  │
│                      ^^^^^^^^                               │
│                     [You are here]                          │
└─────────────────────────────────────────────────────────────┘
```

**Welcome to your new workspace.**

---

*Built with tmux + Textual + Claude + Lizard. Powered by keystrokes.*

`#ClaudeIDE #TerminalLife #TUI #DeveloperTools #Productivity #AITools #CodeQuality`
