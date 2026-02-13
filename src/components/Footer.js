import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="navbar-logo-icon">B</div>
              <span class="navbar-logo-text">bigbensul</span>
            </div>
            <p class="footer-description">
              ${t('footer.description')}
            </p>
          </div>
          
          <div class="footer-column">
            <h5>${t('footer.explore')}</h5>
            <ul class="footer-links">
              <li><a href="/explore">${t('footer.allTools')}</a></li>
              <li><a href="/categories">${t('footer.categories')}</a></li>
              <li><a href="/deals">${t('footer.deals')}</a></li>
              <li><a href="/explore?filter=editorPick">${t('footer.picks')}</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h5>${t('footer.categories')}</h5>
            <ul class="footer-links">
              <li><a href="/explore?category=coding">Learn Coding</a></li>
              <li><a href="/explore?category=design">Design</a></li>
              <li><a href="/explore?category=business">Business</a></li>
              <li><a href="/explore?category=content">Content Creation</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h5>${t('footer.company')}</h5>
            <ul class="footer-links">
              <li><a href="/about">${t('footer.about')}</a></li>
              <li><a href="/submit">${t('footer.submit')}</a></li>
              <li><a href="/contact">${t('footer.contact')}</a></li>
              <li><a href="/privacy">${t('footer.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="footer-copyright">© ${currentYear} bigbensul. ${t('footer.rights')}</p>
          <div class="footer-social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">⌥</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
