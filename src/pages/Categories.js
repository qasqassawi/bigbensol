// Categories Page for Pickr
import { categories, getToolsByCategory } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function CategoriesPage() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <div class="container" style="padding-top: calc(80px + var(--space-8));">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <span class="section-label">${t('categoriesPage.browse')}</span>
        <h1 class="section-title">${t('categoriesPage.title')}</h1>
        <p class="section-subtitle">${t('categoriesPage.subtitle')}</p>
      </div>
      
      <div class="use-case-grid">
        ${categories.map(cat => {
    const catTools = getToolsByCategory(cat.id);
    return `
            <a href="/explore?category=${cat.id}" class="use-case-card reveal">
              <div class="use-case-icon">${cat.icon}</div>
              <h3 class="use-case-title">${t(`categories.${cat.id}`)}</h3>
              <span class="use-case-count">${catTools.length} ${t('home.toolsCount')}</span>
              <div style="margin-top: var(--space-4); display: flex; gap: var(--space-2); flex-wrap: wrap; justify-content: center;">
                ${catTools.slice(0, 3).map(t => `
                  <span class="badge">${t.name}</span>
                `).join('')}
              </div>
            </a>
          `;
  }).join('')}
      </div>
    </div>
  `;
}
