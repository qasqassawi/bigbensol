// UseCaseGrid Component for bigbensul
import { categories } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function UseCaseGrid() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <section class="use-cases section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('home.browseByGoal')}</span>
          <h2 class="section-title">${t('home.whatDoYouWantToDo')}</h2>
          <p class="section-subtitle">${t('home.homeSubtitle')}</p>
        </div>
        
        <div class="use-case-grid">
          ${categories.map((cat, index) => `
            <a href="/explore?category=${cat.id}" class="use-case-card reveal reveal-delay-${(index % 4) + 1}">
              <div class="use-case-icon">${cat.icon}</div>
              <h3 class="use-case-title">${t(`categories.${cat.id}`)}</h3>
              <span class="use-case-count">${cat.count} ${t('home.toolsCount')}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
