// Claude IDE Website - Interactive Features

// Video Modal Functions
function openVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('prompt-video');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    video.play();
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('prompt-video');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    video.pause();
    video.currentTime = 0;
}

// Ctrl+P Video Modal Functions
function openCtrlPModal() {
    const modal = document.getElementById('ctrlp-modal');
    const video = document.getElementById('ctrlp-video');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    video.play();
}

function closeCtrlPModal() {
    const modal = document.getElementById('ctrlp-modal');
    const video = document.getElementById('ctrlp-video');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    video.pause();
    video.currentTime = 0;
}

// Close modal on background click or Escape key
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('video-modal');
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    const ctrlpModal = document.getElementById('ctrlp-modal');
    if (ctrlpModal) {
        ctrlpModal.addEventListener('click', (e) => {
            if (e.target === ctrlpModal) {
                closeCtrlPModal();
            }
        });
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const videoModal = document.getElementById('video-modal');
        if (videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
        const ctrlpModal = document.getElementById('ctrlp-modal');
        if (ctrlpModal && ctrlpModal.classList.contains('active')) {
            closeCtrlPModal();
        }
    }
});

// Copy install command to clipboard
function copyInstall(elementId) {
    const codeEl = document.getElementById(elementId);
    const cmd = codeEl.textContent;
    const btn = codeEl.parentElement.querySelector('.copy-btn');
    const icon = btn.querySelector('.material-icons');
    const text = btn.querySelector('.copy-text');

    navigator.clipboard.writeText(cmd).then(() => {
        // Visual feedback
        btn.classList.add('copied');
        icon.textContent = 'check_circle';
        text.textContent = 'Copied!';

        // Reset after 2 seconds
        setTimeout(() => {
            btn.classList.remove('copied');
            icon.textContent = 'content_copy';
            text.textContent = 'Copy';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = cmd;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btn.classList.add('copied');
        icon.textContent = 'check_circle';
        text.textContent = 'Copied!';

        setTimeout(() => {
            btn.classList.remove('copied');
            icon.textContent = 'content_copy';
            text.textContent = 'Copy';
        }, 2000);
    });
}

// Install/Uninstall toggle
function initInstallToggle() {
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const cmdEl = document.getElementById('install-cmd');
    if (!toggleOptions.length || !cmdEl) return;

    const commands = {
        install: 'curl -fsSL https://claude-ide.org/get | bash',
        uninstall: 'curl -fsSL https://claude-ide.org/uninstall | bash'
    };

    toggleOptions.forEach(option => {
        option.addEventListener('click', () => {
            const mode = option.dataset.mode;
            toggleOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            cmdEl.textContent = commands[mode];
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Fade-in animations on scroll
    initScrollAnimations();

    // Status bar cycling animation
    initStatusBarAnimation();

    // Typing effect for AI demo
    initTypingEffect();

    // Theme preview hover effects
    initThemeHover();

    // Keyboard shortcut visual feedback
    initKeyboardFeedback();

    // Install/Uninstall toggle
    initInstallToggle();
});

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observe sections
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('fade-in');
        observer.observe(title);
    });

    // Observe shortcut groups
    document.querySelectorAll('.shortcut-group').forEach(group => {
        group.classList.add('fade-in');
        observer.observe(group);
    });

    // Observe principles
    document.querySelectorAll('.principle').forEach(principle => {
        principle.classList.add('fade-in');
        observer.observe(principle);
    });

    // Observe tech items
    document.querySelectorAll('.tech-item').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });
}

// Status bar window cycling
function initStatusBarAnimation() {
    const statusItems = document.querySelectorAll('.status-bar .status-item:not(.special)');
    if (statusItems.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
        // Remove active from current
        statusItems[currentIndex].classList.remove('active');

        // Move to next
        currentIndex = (currentIndex + 1) % statusItems.length;

        // Add active to new
        statusItems[currentIndex].classList.add('active');
    }, 2000);
}

// Typing effect for AI streaming demo
function initTypingEffect() {
    const streamingText = document.querySelector('.streaming-text code');
    if (!streamingText) return;

    const fullText = streamingText.textContent;
    let isTyping = false;
    let observer;

    function typeText() {
        if (isTyping) return;
        isTyping = true;

        streamingText.textContent = '';
        streamingText.style.opacity = '1';

        let i = 0;
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        streamingText.appendChild(cursor);

        function type() {
            if (i < fullText.length) {
                streamingText.textContent = fullText.substring(0, i + 1);
                streamingText.appendChild(cursor);
                i++;
                setTimeout(type, 15 + Math.random() * 25);
            } else {
                cursor.remove();
                isTyping = false;
            }
        }

        type();
    }

    // Trigger when AI section is visible
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                setTimeout(typeText, 500);
            }
        });
    }, { threshold: 0.5 });

    const aiDemo = document.querySelector('.ai-demo');
    if (aiDemo) {
        observer.observe(aiDemo);
    }
}

// Theme preview hover effects
function initThemeHover() {
    const themes = document.querySelectorAll('.theme');
    const themeColors = {
        'catppuccin': { bg: '#1e1e2e', accent: '#cba6f7' },
        'tokyo': { bg: '#1a1b26', accent: '#7aa2f7' },
        'gruvbox': { bg: '#282828', accent: '#fabd2f' },
        'dracula': { bg: '#282a36', accent: '#bd93f9' },
        'nord': { bg: '#2e3440', accent: '#88c0d0' }
    };

    themes.forEach(theme => {
        const themeName = theme.classList[1]; // e.g., 'catppuccin'
        const colors = themeColors[themeName];

        if (colors) {
            theme.addEventListener('mouseenter', () => {
                theme.style.backgroundColor = colors.bg;
                theme.style.borderColor = colors.accent;
                theme.style.color = colors.accent;
            });

            theme.addEventListener('mouseleave', () => {
                theme.style.backgroundColor = '';
                theme.style.borderColor = '';
                theme.style.color = '';
            });
        }
    });
}

// Keyboard visual feedback
function initKeyboardFeedback() {
    // Add click effect to kbd elements
    document.querySelectorAll('kbd').forEach(kbd => {
        kbd.addEventListener('click', () => {
            kbd.classList.add('pressed');
            setTimeout(() => kbd.classList.remove('pressed'), 150);
        });
    });

    // Actual keyboard listener for demo
    document.addEventListener('keydown', (e) => {
        // F-key highlighting on status bar
        if (e.key.startsWith('F') && e.key.length <= 3) {
            const fNum = e.key.substring(1);
            const statusItem = document.querySelector(`.status-item:contains("F${fNum}")`);

            // Highlight matching kbd elements
            document.querySelectorAll('kbd').forEach(kbd => {
                if (kbd.textContent.includes(e.key)) {
                    kbd.classList.add('pressed');
                    setTimeout(() => kbd.classList.remove('pressed'), 300);
                }
            });
        }
    });
}

// Add CSS for animations dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .typing-cursor {
        animation: blink 0.7s infinite;
        color: #8ec07c;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    kbd.pressed {
        transform: scale(0.95);
        background: #8ec07c !important;
        color: #1d2021 !important;
    }

    .feature-card.fade-in:nth-child(1) { transition-delay: 0s; }
    .feature-card.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .feature-card.fade-in:nth-child(3) { transition-delay: 0.2s; }
    .feature-card.fade-in:nth-child(4) { transition-delay: 0.3s; }
    .feature-card.fade-in:nth-child(5) { transition-delay: 0.4s; }
    .feature-card.fade-in:nth-child(6) { transition-delay: 0.5s; }
    .feature-card.fade-in:nth-child(7) { transition-delay: 0.6s; }

    .shortcut-group.fade-in:nth-child(1) { transition-delay: 0s; }
    .shortcut-group.fade-in:nth-child(2) { transition-delay: 0.15s; }
    .shortcut-group.fade-in:nth-child(3) { transition-delay: 0.3s; }

    .principle.fade-in:nth-child(1) { transition-delay: 0s; }
    .principle.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .principle.fade-in:nth-child(3) { transition-delay: 0.2s; }
    .principle.fade-in:nth-child(4) { transition-delay: 0.3s; }
    .principle.fade-in:nth-child(5) { transition-delay: 0.4s; }
    .principle.fade-in:nth-child(6) { transition-delay: 0.5s; }

    .tech-item.fade-in:nth-child(1) { transition-delay: 0s; }
    .tech-item.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .tech-item.fade-in:nth-child(3) { transition-delay: 0.2s; }
    .tech-item.fade-in:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);
