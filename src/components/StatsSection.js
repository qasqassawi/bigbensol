// Stats Section Component for bigbensul
import { stats } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function StatsSection() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  // Map stat labels to translation keys
  const statMap = {
    'Tools Listed': 'stats.toolsListed',
    'Categories': 'stats.categories',
    'Monthly Users': 'stats.monthlyUsers',
    'Active Deals': 'stats.activeDeals'
  };

  return `
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          ${stats.map(stat => `
            <div class="stat-card reveal">
              <div class="stat-number" data-counter="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
              <div class="stat-label">${t(statMap[stat.label] || stat.label)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
