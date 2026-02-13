import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function HowItWorks() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  const steps = [
    {
      number: 1,
      icon: '🎯',
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc')
    },
    {
      number: 2,
      icon: '✨',
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc')
    },
    {
      number: 3,
      icon: '🚀',
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc')
    }
  ];

  return `
    <section class="how-it-works section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('howItWorks.label')}</span>
          <h2 class="section-title">${t('howItWorks.title')}</h2>
          <p class="section-subtitle">${t('howItWorks.subtitle')}</p>
        </div>
        
        <div class="steps-grid">
          ${steps.map((step, index) => `
            <div class="step-card reveal reveal-delay-${index + 1}">
              <div class="step-number">${step.number}</div>
              <div class="step-icon">${step.icon}</div>
              <h3 class="step-title">${step.title}</h3>
              <p class="step-description">${step.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
