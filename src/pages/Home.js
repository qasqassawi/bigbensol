// Home Page for Pickr
import { Hero } from '../components/Hero.js';
import { HowItWorks } from '../components/HowItWorks.js';
import { UseCaseGrid } from '../components/UseCaseGrid.js';
import { StatsSection } from '../components/StatsSection.js';
import { Testimonials } from '../components/Testimonials.js';
import { EmailCapture } from '../components/EmailCapture.js';
import { ToolsGrid } from '../components/ToolCard.js';
import { getFeaturedTools } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function HomePage() {
  const featuredTools = getFeaturedTools();
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    ${Hero()}
    ${HowItWorks()}
    ${UseCaseGrid()}
    
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('home.featuredLabel')}</span>
          <h2 class="section-title">${t('home.featuredTitle')}</h2>
          <p class="section-subtitle">${t('home.featuredSubtitle')}</p>
        </div>
        ${ToolsGrid(featuredTools)}
        <div style="text-align: center; margin-top: var(--space-8);">
          <a href="/explore" class="btn btn-secondary btn-lg">${t('home.viewAllBtn')}</a>
        </div>
      </div>
    </section>
    
    ${StatsSection()}
    ${Testimonials()}
    ${EmailCapture()}
  `;
}
