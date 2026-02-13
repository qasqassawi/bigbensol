// bigbensul - Main Application Entry Point
import './styles/index.css';
import './styles/components.css';

import { router } from './router.js';
import { Navbar, initNavbar } from './components/Navbar.js';
import { initSearchBar } from './components/SearchBar.js';
import { initEmailCapture } from './components/EmailCapture.js';
import { Footer } from './components/Footer.js';
import { initScrollReveal, initCounterAnimation } from './utils/animations.js';
import { getTranslation } from './data/translations.js';

import { HomePage } from './pages/Home.js';
import { ExplorePage, initExplorePage } from './pages/Explore.js';
import { ToolDetailPage } from './pages/ToolDetail.js';
import { DealsPage } from './pages/Deals.js';
import { CategoriesPage } from './pages/Categories.js';
import { AboutPage } from './pages/About.js';
import { WelcomePage, initWelcomePage } from './pages/Welcome.js';

// Language state
let currentLang = localStorage.getItem('bigbensul-lang') || 'en';

// App container
const app = document.getElementById('app');

// Language management
export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bigbensul-lang', lang);
  updateDocumentAttributes();
  window.location.reload(); // Simple way to refresh all components with new lang
}

function updateDocumentAttributes() {
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', 'ltr'); // Force LTR as requested
}

// Initial attributes
updateDocumentAttributes();

// Export current language for other components
export function getCurrentLanguage() {
  return currentLang;
}

// Render function
function render(content, layout = true) {
  if (layout) {
    app.innerHTML = `
      ${Navbar()}
      <main class="page-content">
        ${content}
      </main>
      ${Footer()}
    `;
    // Initialize common components
    initNavbar();
    initSearchBar();
    initEmailCapture();
  } else {
    app.innerHTML = content;
  }

  // Initialize scroll animations
  setTimeout(() => {
    initScrollReveal();
    initCounterAnimation();
  }, 100);

  // Scroll to top on navigation
  window.scrollTo(0, 0);
}

// Setup routes
router.addRoute('/', () => {
  render(WelcomePage(), false);
  initWelcomePage();
});

router.addRoute('/home', () => render(HomePage()));
router.addRoute('/explore', () => {
  render(ExplorePage());
  initExplorePage();
});
router.addRoute('/tool/:id', (params) => render(ToolDetailPage(params)));
router.addRoute('/deals', () => render(DealsPage()));
router.addRoute('/categories', () => render(CategoriesPage()));
router.addRoute('/about', () => render(AboutPage()));
router.addRoute('/reviews', () => render(ExplorePage())); // Reviews redirects to explore
router.addRoute('/submit', () => render(`
  <div class="container" style="padding-top: calc(80px + var(--space-16)); text-align: center;">
    <h1 class="section-title">Submit a Tool</h1>
    <p style="color: var(--text-secondary); margin-bottom: var(--space-8);">
      Know a great tool we should feature? Let us know!
    </p>
    <div class="tool-detail-section" style="max-width: 500px; margin: 0 auto;">
      <form id="submit-form" style="display: flex; flex-direction: column; gap: var(--space-4);">
        <input type="text" class="input" placeholder="Tool Name" required>
        <input type="url" class="input" placeholder="Tool Website" required>
        <textarea class="input" placeholder="Why should we feature this tool?" rows="4" required style="resize: vertical;"></textarea>
        <input type="email" class="input" placeholder="Your Email (optional)">
        <button type="submit" class="btn btn-primary btn-lg">Submit Tool</button>
      </form>
    </div>
  </div>
`));

// Handle initial route
router.handleRoute();

// Log app ready
console.log('🚀 bigbensul is ready!');
