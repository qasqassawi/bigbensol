import { getCurrentLanguage, setLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function Navbar() {
  const currentPath = window.location.pathname;
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <nav class="navbar" id="navbar">
      <div class="container navbar-inner">
        <a href="/" class="navbar-logo">
          <img src="/logo.jpg" alt="BigBenSul Logo" class="navbar-logo-img">
        </a>
        
        <ul class="navbar-nav" id="navbar-nav">
          <li><a href="/explore" class="${currentPath === '/explore' ? 'active' : ''}">${t('nav.explore')}</a></li>
          <li><a href="/categories" class="${currentPath === '/categories' ? 'active' : ''}">${t('nav.categories')}</a></li>
          <li><a href="/deals" class="${currentPath === '/deals' ? 'active' : ''}">${t('nav.deals')}</a></li>
          <li><a href="/reviews" class="${currentPath === '/reviews' ? 'active' : ''}">${t('nav.reviews')}</a></li>
          <li><a href="/about" class="${currentPath === '/about' ? 'active' : ''}">${t('nav.about')}</a></li>
        </ul>
        
        <div class="navbar-actions">
          <button class="lang-toggle btn btn-ghost btn-sm" id="lang-toggle" aria-label="Switch Language">
            ${lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button class="theme-toggle" id="theme-toggle" aria-label="${t('nav.toggleTheme')}">
            <span class="theme-icon">🌙</span>
          </button>
          <a href="/submit" class="btn btn-primary btn-sm">${t('nav.submit')}</a>
          <button class="navbar-mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('navbar-nav');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Theme toggle
  const savedTheme = localStorage.getItem('bigbensul-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bigbensul-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  // Language toggle
  langToggle?.addEventListener('click', () => {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
    mobileToggle.textContent = navMenu.classList.contains('mobile-open') ? '✕' : '☰';
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}
