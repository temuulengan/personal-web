// ==========================================
// Multi-Language Support
// ==========================================
let currentLanguage = localStorage.getItem('language') || 'en';

function initLanguageSelector() {
    const languageSelector = document.querySelector('.language-selector');
    const languageButtons = document.querySelectorAll('.language-btn');
    
    // Set initial active language
    updateActiveLanguage(currentLanguage);
    
    // Add click listeners to language buttons
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                localStorage.setItem('language', lang);
                updateActiveLanguage(lang);
                translatePage(lang);
            }
        });
    });
    
    // Translate page on load
    translatePage(currentLanguage);
}

function updateActiveLanguage(lang) {
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

function translatePage(lang) {
    if (!translations[lang]) {
        console.error(`Translations for language "${lang}" not found`);
        return;
    }
    
    const t = translations[lang];
    
    // Navigation
    document.querySelector('[data-i18n="nav.home"]').textContent = t.nav.home;
    document.querySelector('[data-i18n="nav.about"]').textContent = t.nav.about;
    document.querySelector('[data-i18n="nav.skills"]').textContent = t.nav.skills;
    document.querySelector('[data-i18n="nav.projects"]').textContent = t.nav.projects;
    document.querySelector('[data-i18n="nav.contact"]').textContent = t.nav.contact;
    
    // Hero Section
    document.querySelector('[data-i18n="hero.availability"]').textContent = t.hero.availability;
    document.querySelector('[data-i18n="hero.greeting"]').textContent = t.hero.greeting;
    document.querySelector('[data-i18n="hero.subtitle"]').textContent = t.hero.subtitle;
    document.querySelector('[data-i18n="hero.description"]').textContent = t.hero.description;
    document.querySelector('[data-i18n="hero.contactButton"]').innerHTML = `<span>${t.hero.contactButton}</span>` + document.querySelector('[data-i18n="hero.contactButton"]').querySelector('svg').outerHTML;
    document.querySelector('[data-i18n="hero.resumeButton"]').innerHTML = document.querySelector('[data-i18n="hero.resumeButton"]').querySelector('svg').outerHTML + `<span>${t.hero.resumeButton}</span>`;
    
    // About Section
    document.querySelector('[data-i18n="about.title"]').textContent = t.about.title;
    document.querySelector('[data-i18n="about.subtitle"]').textContent = t.about.subtitle;
    document.querySelector('[data-i18n="about.paragraph1"]').textContent = t.about.paragraph1;
    document.querySelector('[data-i18n="about.paragraph2"]').textContent = t.about.paragraph2;
    document.querySelector('[data-i18n="about.educationLabel"]').textContent = t.about.educationLabel;
    document.querySelector('[data-i18n="about.educationValue"]').textContent = t.about.educationValue;
    document.querySelector('[data-i18n="about.focusLabel"]').textContent = t.about.focusLabel;
    document.querySelector('[data-i18n="about.focusValue"]').textContent = t.about.focusValue;
    document.querySelector('[data-i18n="about.goalLabel"]').textContent = t.about.goalLabel;
    document.querySelector('[data-i18n="about.goalValue"]').textContent = t.about.goalValue;
    
    // Skills Section
    document.querySelector('[data-i18n="skills.title"]').textContent = t.skills.title;
    document.querySelector('[data-i18n="skills.subtitle"]').textContent = t.skills.subtitle;
    document.querySelector('[data-i18n="skills.categories.languages"]').textContent = t.skills.categories.languages;
    document.querySelector('[data-i18n="skills.categories.frameworks"]').textContent = t.skills.categories.frameworks;
    document.querySelector('[data-i18n="skills.categories.tools"]').textContent = t.skills.categories.tools;
    document.querySelector('[data-i18n="skills.categories.spoken"]').textContent = t.skills.categories.spoken;
    
    // Projects Section
    document.querySelector('[data-i18n="projects.title"]').textContent = t.projects.title;
    document.querySelector('[data-i18n="projects.subtitle"]').textContent = t.projects.subtitle;
    document.querySelector('[data-i18n="projects.project1.title"]').textContent = t.projects.project1.title;
    document.querySelector('[data-i18n="projects.project1.description"]').textContent = t.projects.project1.description;
    document.querySelector('[data-i18n="projects.project2.title"]').textContent = t.projects.project2.title;
    document.querySelector('[data-i18n="projects.project2.description"]').textContent = t.projects.project2.description;
    document.querySelector('[data-i18n="projects.project3.title"]').textContent = t.projects.project3.title;
    document.querySelector('[data-i18n="projects.project3.description"]').textContent = t.projects.project3.description;
    
    // Contact Section
    document.querySelector('[data-i18n="contact.title"]').textContent = t.contact.title;
    document.querySelector('[data-i18n="contact.description"]').textContent = t.contact.description;
    document.querySelector('[data-i18n="contact.github"]').textContent = t.contact.github;
    
    // Footer
    document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
    document.querySelector('[data-i18n="footer.tagline"]').textContent = t.footer.tagline;
    
    // Aria labels
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', t.aria.themeToggle);
        themeToggle.setAttribute('title', t.aria.themeToggle);
    }
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.setAttribute('aria-label', t.aria.menuToggle);
    }
    
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.textContent = t.aria.skipToContent;
    }
}

// ==========================================
// Particle Background Animation
// ==========================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 80;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    createParticles();
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup on window unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrame);
    });
}

// ==========================================
// Dark Mode Toggle
// ==========================================
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference, default to dark if not set
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || !savedTheme) {
        // Default to dark mode
        body.classList.add('dark-mode');
        if (!savedTheme) {
            localStorage.setItem('theme', 'dark');
        }
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles, theme, and language
    initParticles();
    initThemeToggle();
    initLanguageSelector();
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // ==========================================
    // Smooth Scroll with Offset for Fixed Navbar
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // Active Navigation Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // ==========================================
    // Navbar Background on Scroll
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });
    
    // ==========================================
    // Intersection Observer for Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .highlight-item, .contact-method');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // ==========================================
    // Skill Bar Animation
    // ==========================================
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 100);
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // ==========================================
    // Typing Effect for Hero Subtitle (Optional)
    // ==========================================
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        let typewriterEnabled = window.innerWidth > 768; // Only on larger screens
        
        if (typewriterEnabled) {
            heroSubtitle.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < originalText.length) {
                    heroSubtitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            // Start typing after a short delay
            setTimeout(typeWriter, 500);
        }
    }
    
    // ==========================================
    // Form Validation (if contact form is added)
    // ==========================================
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const formData = new FormData(contactForm);
            let isValid = true;
            
            formData.forEach((value, key) => {
                if (!value.trim()) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Handle form submission
                console.log('Form submitted successfully');
                // Add your form submission logic here
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // ==========================================
    // Lazy Loading for Images (if added later)
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ==========================================
    // Add hover effect to project cards
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--border-color)';
        });
    });
    
    // ==========================================
    // Prevent default on empty links
    // ==========================================
    document.querySelectorAll('a[href="#"]').forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    });
    
    // ==========================================
    // Update current year in footer
    // ==========================================
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const yearMatch = yearElement.textContent.match(/© (\d{4})/);
        if (yearMatch) {
            yearElement.textContent = yearElement.textContent.replace(yearMatch[1], currentYear);
        }
    }
});

// ==========================================
// Accessibility: Skip to Content Link
// ==========================================
window.addEventListener('load', () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});
