// Deals Page for Pickr
import { getToolsWithDeals } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function DealsPage() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);
  const dealsTools = getToolsWithDeals();

  return `
    <div class="container" style="padding-top: calc(80px + var(--space-8));">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <span class="section-label">${t('deals.label')}</span>
        <h1 class="section-title">${t('deals.title')}</h1>
        <p class="section-subtitle">${t('deals.subtitle')}</p>
      </div>
      
      <div class="tools-grid">
        ${dealsTools.map(tool => `
          <div class="deal-card">
            <div class="deal-badge">${tool.deal.expires ? t('deals.limitedTime') : t('deals.ongoing')}</div>
            <div class="tool-card-header" style="margin-bottom: var(--space-4);">
              <div class="tool-logo">${tool.logo}</div>
              <div class="tool-info">
                <h3 class="tool-name">${tool.name}</h3>
                <div class="tool-category">${tool.tagline}</div>
              </div>
            </div>
            <div class="deal-discount">${tool.deal.discount}</div>
            <p class="tool-description">${tool.description}</p>
            ${tool.deal.code ? `
              <div class="deal-terms" style="background: var(--bg-tertiary); padding: var(--space-3); border-radius: var(--radius-md); margin: var(--space-4) 0;">
                ${t('deals.useCode')} <strong>${tool.deal.code}</strong>
              </div>
            ` : ''}
            ${tool.deal.expires ? `
              <p class="deal-terms">${t('deals.expires')} ${new Date(tool.deal.expires).toLocaleDateString()}</p>
            ` : ''}
            <div style="display: flex; gap: var(--space-3); margin-top: var(--space-4);">
              <a href="${tool.affiliateUrl}" class="btn btn-primary" style="flex: 1;" target="_blank">
                ${t('deals.getDeal')} →
              </a>
              <a href="/tool/${tool.id}" class="btn btn-secondary">${t('deals.details')}</a>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${dealsTools.length === 0 ? `
        <div style="text-align: center; padding: var(--space-16);">
          <p style="font-size: var(--font-size-xl); color: var(--text-secondary);">
            ${t('deals.noDeals')}
          </p>
          <a href="/explore" class="btn btn-primary btn-lg" style="margin-top: var(--space-6);">
            ${t('deals.browseAll')}
          </a>
        </div>
      ` : ''}
    </div>
  `;
}
