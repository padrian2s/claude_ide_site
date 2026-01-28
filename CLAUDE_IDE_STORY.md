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
┌───────────────────────────────────────────────────────────────────────────────┐
│ F1:Term  F2:Tree  F3:Lizard  F4:Glow  F5:Workflow  F6:Prompt  F7:Git  F8:Status │
│ F9:Config  F10:Exit  ^H:Help  F12:Keys                                          │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## F1: Dynamic Terminals

One default terminal. Add as many as you need.

- Run your Claude Code in F1
- `Ctrl+T` creates new terminals (T2, T3...)
- `Shift+F1-F9` switches between terminals
- `Ctrl+X` closes current terminal

No splitting. No resizing. Full screen, full focus.

---

## F2: Tree View + Smart Search

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

## F3: Lizard - Code Complexity Analyzer

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

## F4: Glow - Markdown Viewer

Beautiful markdown rendering in the terminal.

- README files that actually look good
- Documentation without leaving your flow
- Syntax highlighting for code blocks

Because `cat README.md` is ugly.

---

## F5: Workflow Chain Orchestrator

**Multi-project pipelines with visual dependencies.**

```
┌─────────────────────┬─────────────────────────┐
│   Workflows         │   Chain Definition      │
├─────────────────────┼─────────────────────────┤
│ ▸ Deploy Prod       │ 1. Build API            │
│   Test Suite        │ 2. Run Tests            │
│   Full CI/CD        │ 3. Deploy (→1,2)        │
└─────────────────────┴─────────────────────────┘
```

- `n` - Create new workflow
- `e` - Edit selected workflow
- `Enter` - Run workflow chain
- Real-time execution with live output
- Dependencies between nodes

**Chain prompts across projects. Execute in sequence or parallel.**

---

## F6: Prompt Writer - AI-Powered Editor

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

## F7: Git - Lazygit

**Full-featured git interface in your IDE.**

```
┌─ Status ─────────────────────────────────┐
│ ▸ M  src/api.py                          │
│   A  tests/test_api.py                   │
│   D  old_file.py                         │
└──────────────────────────────────────────┘
```

- Stage, commit, push, pull
- Branch management
- Conflict resolution
- All keyboard-driven

---

## F8: Status - Session Metrics

**Track your AI usage and session costs.**

```
┌─ Session Metrics ────────────────────────┐
│ Tokens In:     12,450   Cache Read: 8,200│
│ Tokens Out:     3,280   Cache Write: 4,100│
│ Est. Cost:     $0.42                      │
│ Messages:      24       Duration: 1h 23m  │
│ Model:         claude-opus-4-5            │
└───────────────────────────────────────────┘
```

- Auto-refreshes every 5 seconds
- Token usage breakdown
- Cost estimation
- Git branch info

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
  Enter: Apply  |  p: Position  |  c: AI Customize
```

- 8 beautiful themes
- Status bar top or bottom
- AI-assisted screen customization
- Auto-backup and hot-reload

---

## Navigation That Makes Sense

| Key | Action |
|-----|--------|
| `F1-F9` | Jump to window |
| `Shift+Left/Right` | Previous/Next window |
| `Ctrl+T` | New terminal |
| `Ctrl+X` | Close terminal |
| `Ctrl+P` | Quick input popup |
| `Ctrl+H` | Help overlay |
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
├── Window 1 (F1): Terminal ─────────── zsh (Ctrl+T adds more)
├── Window 2 (F2): Tree ────────────── Python/Textual
├── Window 3 (F3): Lizard ──────────── Python/Textual + Lizard
├── Window 4 (F4): Glow ────────────── Go binary
├── Window 5 (F5): Workflow ─────────── Python/Textual
├── Window 6 (F6): Prompt Writer ───── Python/Textual + Claude
├── Window 7 (F7): Git ─────────────── Lazygit
├── Window 8 (F8): Status ──────────── Python/Textual
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
claude_ide/
├── tui_env.py           # Main launcher
├── tree_view.py         # File browser + viewer + file manager
├── config_panel.py      # Theme settings + AI customization
├── workflow_chain.py    # Workflow chain orchestrator
├── workflow_executor.py # tmux execution engine
├── workflow_models.py   # Workflow data models
├── favorites.py         # Project navigator
├── prompt_writer.py     # AI prompt editor
├── quick_input.py       # Quick input popup (Ctrl+P)
├── status_viewer.py     # Session metrics viewer
├── lizard_tui.py        # Code complexity analyzer
├── ai_customizer.py     # AI-assisted code modification
├── start.sh             # Quick launcher
└── CLAUDE.md            # Documentation
```

---

## Getting Started

```bash
# Install dependencies
brew install tmux fzf ripgrep glow lazygit
pip install textual anthropic lizard

# Set up AI (optional, for Prompt Writer & AI Customization)
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
┌───────────────────────────────────────────────────────────────────────────────┐
│ F1:Term  F2:Tree  F3:Lizard  F4:Glow  F5:Workflow  F6:Prompt  F7:Git  F8:Status │
│          ^^^^^^^^                                                                │
│         [You are here]                                                           │
└───────────────────────────────────────────────────────────────────────────────┘
```

**Welcome to your new workspace.**

---

*Built with tmux + Textual + Claude + Lazygit + Lizard. Powered by keystrokes.*

`#ClaudeIDE #TerminalLife #TUI #DeveloperTools #Productivity #AITools #CodeQuality`
