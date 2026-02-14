// About Page for bigbensul
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function AboutPage() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <div class="container" style="padding-top: calc(80px + var(--space-8)); max-width: 800px;">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <h1 class="section-title">${t('about.titlePart1')} <span class="text-gradient">bigbensul</span></h1>
        <p class="section-subtitle">${t('about.subtitle')}</p>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>🎯 ${t('about.missionTitle')}</h3>
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4);">
          ${t('about.missionText1')}
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          ${t('about.missionText2')}
        </p>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>✨ ${t('about.diffTitle')}</h3>
        <ul style="color: var(--text-secondary); line-height: 2; padding-left: var(--space-6);">
          <li><strong>${t('about.diffItem1').split(' — ')[0]}</strong> — ${t('about.diffItem1').split(' — ')[1]}</li>
          <li><strong>${t('about.diffItem2').split(' — ')[0]}</strong> — ${t('about.diffItem2').split(' — ')[1]}</li>
          <li><strong>${t('about.diffItem3').split(' — ')[0]}</strong> — ${t('about.diffItem3').split(' — ')[1]}</li>
          <li><strong>${t('about.diffItem4').split(' — ')[0]}</strong> — ${t('about.diffItem4').split(' — ')[1]}</li>
          <li><strong>${t('about.diffItem5').split(' — ')[0]}</strong> — ${t('about.diffItem5').split(' — ')[1]}</li>
        </ul>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>💰 ${t('about.moneyTitle')}</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          ${t('about.moneyText')}
        </p>
      </div>
      
      <div class="tool-detail-section">
        <h3>📧 ${t('about.contactTitle')}</h3>
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4);">
          ${t('about.contactText')}
        </p>
        <a href="mailto:hello@bigbensul.tools" class="btn btn-primary">${t('about.contactBtn')}</a>
        <a href="/submit" class="btn btn-secondary" style="margin-left: var(--space-3);">${t('about.submitBtn')}</a>
      </div>
    </div>
  `;
}
