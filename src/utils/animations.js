// Animation utilities for bigbensul

// Initialize scroll reveal animations
export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check initial state

    return () => window.removeEventListener('scroll', revealOnScroll);
}

// Animated counter
export function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);

    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }

    update();
}

// Observe and animate counters when in view
export function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-counter]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.dataset.counter);
                const suffix = entry.target.dataset.suffix || '';
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target, target, 2000, suffix);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    return () => counters.forEach(counter => observer.unobserve(counter));
}

// Staggered animation for lists
export function staggerAnimation(elements, baseDelay = 100) {
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * baseDelay}ms`;
    });
}

// Placeholder rotation for search
export function initPlaceholderRotation(input, placeholders, interval = 3000) {
    let currentIndex = 0;

    const rotate = () => {
        currentIndex = (currentIndex + 1) % placeholders.length;
        input.setAttribute('placeholder', placeholders[currentIndex]);
    };

    const intervalId = setInterval(rotate, interval);

    return () => clearInterval(intervalId);
}

// Add ripple effect to buttons
export function addRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}
